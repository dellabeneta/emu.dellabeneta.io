#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '../..');

function loadPlatforms() {
  const content = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
  const end = content.indexOf('\nconst desc_en');
  const code = content.substring(0, end);
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(code.replace('const PLATFORMS', 'PLATFORMS'), ctx);
  return ctx.PLATFORMS;
}

const VALID_DECADES = new Set(['80s', '90s', '00s', '80s/90s']);
const REQUIRED_PLATFORM_FIELDS = ['name', 'fullName', 'abbr', 'era', 'decade', 'maker', 'cores', 'img', 'games'];
const REQUIRED_GAME_FIELDS = ['title', 'year', 'file'];

let pass = 0;
let fail = 0;

function ok(msg)    { console.log(`\x1b[32m✔ ${msg}\x1b[0m`); pass++; }
function error(msg) { console.log(`\x1b[31m✘ ${msg}\x1b[0m`); fail++; }

console.log('\n═══════════════════════════════════════════');
console.log('  RetroVault — Testes de Estrutura PLATFORMS[]');
console.log('═══════════════════════════════════════════\n');

const PLATFORMS = loadPlatforms();

// Verifica que o array não está vazio
if (PLATFORMS.length > 0) {
  ok(`PLATFORMS contém ${PLATFORMS.length} plataformas`);
} else {
  error('PLATFORMS está vazio');
  process.exit(1);
}

for (const platform of PLATFORMS) {
  const p = `[${platform.name || '???'}]`;

  // Campos obrigatórios presentes e não vazios
  for (const field of REQUIRED_PLATFORM_FIELDS) {
    const val = platform[field];
    if (val === undefined || val === null || val === '') {
      error(`${p} campo obrigatório ausente ou vazio: "${field}"`);
    } else {
      ok(`${p} "${field}" preenchido`);
    }
  }

  // cores deve ser array não vazio
  if (Array.isArray(platform.cores) && platform.cores.length > 0) {
    ok(`${p} cores é array com ${platform.cores.length} elemento(s)`);
  } else {
    error(`${p} cores deve ser um array não vazio`);
  }

  // decade deve ser valor válido
  if (VALID_DECADES.has(platform.decade)) {
    ok(`${p} decade "${platform.decade}" é válido`);
  } else {
    error(`${p} decade "${platform.decade}" inválido — esperado: ${[...VALID_DECADES].join(', ')}`);
  }

  // games deve ser array não vazio
  if (Array.isArray(platform.games) && platform.games.length > 0) {
    ok(`${p} games contém ${platform.games.length} jogo(s)`);
  } else {
    error(`${p} games deve ser um array não vazio`);
  }

  // Valida cada jogo
  for (const game of (platform.games || [])) {
    const g = `${p} "${game.title || '???'}"`;

    for (const field of REQUIRED_GAME_FIELDS) {
      const val = game[field];
      if (!val) {
        error(`${g} campo obrigatório ausente ou vazio: "${field}"`);
      }
    }

    // year deve ser string de 4 dígitos
    if (game.year && /^\d{4}$/.test(game.year)) {
      ok(`${g} year "${game.year}" válido`);
    } else {
      error(`${g} year "${game.year}" inválido — esperado 4 dígitos`);
    }

    // file deve ter extensão explícita
    if (game.file && path.extname(game.file) !== '') {
      ok(`${g} file "${game.file}" tem extensão`);
    } else {
      error(`${g} file "${game.file}" sem extensão explícita`);
    }
  }
}

console.log('\n═══════════════════════════════════════════');
console.log(`  Resultado: ${pass} passou(aram) | ${fail} falhou(aram)`);
console.log('═══════════════════════════════════════════\n');

process.exit(fail > 0 ? 1 : 0);
