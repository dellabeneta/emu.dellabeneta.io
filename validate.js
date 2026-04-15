#!/usr/bin/env node

/**
 * RetroVault — Validador de ROMs
 * Verifica se todos os arquivos referenciados no catálogo existem em disco.
 * Uso: node validate.js
 */

const fs = require('fs');
const path = require('path');

const ROMS_DIR = path.join(__dirname, 'roms');
const SCRIPT   = path.join(__dirname, 'script.js');

// ─── Cores esperadas por plataforma ────────────────────────────────────────
const EXT_MAP = {
  NES:    'nes',
  SNES:   'sfc',
  MEGA:   'md',
  MASTER: 'sms',
  GB:     'gb',
  GBC:    'gbc',
  GBA:    'gba',
  PSX:    'chd',  // pode ser .pbp ou .m3u também
  cps1:   'zip',
  cps2:   'zip',
  cps3:   'zip',
  neogeo: 'zip',
  fbneo:  'zip',
};

// ─── Extrai o array PLATFORMS do script.js via eval controlado ─────────────
function loadPlatforms() {
  const code = fs.readFileSync(SCRIPT, 'utf8');
  const match = code.match(/^const PLATFORMS\s*=\s*(\[[\s\S]*?\n\];)/m);
  if (!match) throw new Error('Não foi possível encontrar PLATFORMS no script.js');
  return eval(match[1]); // eslint-disable-line no-eval
}

// ─── Resolve o nome final do arquivo (mesma lógica do launchGame) ──────────
function resolveFilename(platform, game) {
  const abbr    = platform.abbr;
  const folder  = abbr.toLowerCase();
  const fileRef = game.file;

  let finalName;
  if (fileRef.includes('.')) {
    finalName = fileRef;                          // extensão já embutida
  } else {
    const ext = EXT_MAP[abbr] || 'zip';
    finalName = `${fileRef}.${ext}`;
  }

  return path.join(ROMS_DIR, folder, finalName);
}

// ─── Cores ─────────────────────────────────────────────────────────────────
const RESET  = '\x1b[0m';
const GREEN  = '\x1b[32m';
const RED    = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const BOLD   = '\x1b[1m';

// ─── Main ──────────────────────────────────────────────────────────────────
function run() {
  console.log(`\n${BOLD}${CYAN}══════════════════════════════════════${RESET}`);
  console.log(`${BOLD}  RetroVault — Validador de ROMs${RESET}`);
  console.log(`${BOLD}${CYAN}══════════════════════════════════════${RESET}\n`);

  let platforms;
  try {
    platforms = loadPlatforms();
  } catch (e) {
    console.error(`${RED}Erro ao carregar PLATFORMS: ${e.message}${RESET}`);
    process.exit(1);
  }

  let totalGames   = 0;
  let totalOk      = 0;
  let totalMissing = 0;
  let totalDupes   = 0;
  const allErrors  = [];

  for (const platform of platforms) {
    const games  = platform.games || [];
    const abbr   = platform.abbr;
    let   pOk    = 0;
    let   pFail  = 0;

    // ── Detecta títulos duplicados ────────────────────────────────────────
    const seen = new Map();
    for (const game of games) {
      const key = game.title.toLowerCase();
      if (seen.has(key)) {
        totalDupes++;
        allErrors.push({ platform: abbr, type: 'DUPL', label: game.title });
      }
      seen.set(key, true);
    }

    // ── Valida campos obrigatórios e existência do arquivo ────────────────
    for (const game of games) {
      totalGames++;

      if (!game.title || !game.file) {
        allErrors.push({ platform: abbr, type: 'FIELD', label: game.title || '(sem título)' });
        pFail++;
        totalMissing++;
        continue;
      }

      const filePath = resolveFilename(platform, game);

      // PSX aceita .chd, .pbp e .m3u — tenta as três
      let exists = fs.existsSync(filePath);
      if (!exists && abbr === 'PSX') {
        for (const ext of ['chd', 'pbp', 'm3u', 'PBP']) {
          const base = game.file.includes('.') ? game.file : `${game.file}.${ext}`;
          if (fs.existsSync(path.join(ROMS_DIR, 'psx', base))) {
            exists = true;
            break;
          }
        }
      }

      if (exists) {
        pOk++;
        totalOk++;
      } else {
        pFail++;
        totalMissing++;
        allErrors.push({ platform: abbr, type: 'MISS', label: game.title, file: path.basename(filePath) });
      }
    }

    // ── Linha de resultado por plataforma ─────────────────────────────────
    const status = pFail === 0
      ? `${GREEN}✓ ${pOk}/${games.length}${RESET}`
      : `${RED}✗ ${pOk}/${games.length} (${pFail} erro${pFail > 1 ? 's' : ''})${RESET}`;

    console.log(`  ${BOLD}${abbr.padEnd(8)}${RESET} ${platform.name.padEnd(30)} ${status}`);
  }

  // ─── Detalhes dos erros ─────────────────────────────────────────────────
  if (allErrors.length > 0) {
    console.log(`\n${BOLD}${RED}── Erros encontrados ──────────────────${RESET}`);
    for (const e of allErrors) {
      if (e.type === 'MISS')   console.log(`  ${RED}[AUSENTE]${RESET}  [${e.platform}] "${e.label}" → ${YELLOW}${e.file}${RESET}`);
      if (e.type === 'DUPL')   console.log(`  ${YELLOW}[DUPLICADO]${RESET} [${e.platform}] "${e.label}"`);
      if (e.type === 'FIELD')  console.log(`  ${RED}[CAMPO]${RESET}    [${e.platform}] "${e.label}" — title ou file ausente`);
    }
  }

  // ─── Resumo final ───────────────────────────────────────────────────────
  console.log(`\n${BOLD}${CYAN}── Resumo ─────────────────────────────${RESET}`);
  console.log(`  Plataformas : ${platforms.length}`);
  console.log(`  Total jogos : ${totalGames}`);
  console.log(`  ${GREEN}OK          : ${totalOk}${RESET}`);
  if (totalMissing > 0) console.log(`  ${RED}Ausentes    : ${totalMissing}${RESET}`);
  if (totalDupes   > 0) console.log(`  ${YELLOW}Duplicados  : ${totalDupes}${RESET}`);

  const allGood = totalMissing === 0 && totalDupes === 0;
  console.log(`\n  ${allGood ? `${GREEN}${BOLD}Tudo OK!` : `${RED}${BOLD}Corrija os erros acima.`}${RESET}\n`);

  process.exit(allGood ? 0 : 1);
}

run();
