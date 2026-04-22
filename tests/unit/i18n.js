#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '../..');

function loadData() {
  const content = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
  const start = content.indexOf('\nconst translations');
  const end = content.indexOf('\nfunction updateUI');
  const code = content.substring(start, end);
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(code.replace('const translations', 'translations'), ctx);
  return ctx.translations;
}

let pass = 0;
let fail = 0;

function ok(msg)    { console.log(`\x1b[32m✔ ${msg}\x1b[0m`); pass++; }
function error(msg) { console.log(`\x1b[31m✘ ${msg}\x1b[0m`); fail++; }

console.log('\n═══════════════════════════════════════════');
console.log('  RetroVault — Testes de i18n (PT/EN)');
console.log('═══════════════════════════════════════════\n');

const translations = loadData();
const ptKeys = Object.keys(translations.pt);
const enKeys = Object.keys(translations.en);

// Chaves que existem em PT mas não em EN
for (const key of ptKeys) {
  if (translations.en[key] === undefined) {
    error(`Chave "${key}" existe em PT mas não em EN`);
  } else if (!translations.en[key]) {
    error(`Chave "${key}" está vazia em EN`);
  } else {
    ok(`"${key}" presente em PT e EN`);
  }
}

// Chaves que existem em EN mas não em PT
for (const key of enKeys) {
  if (translations.pt[key] === undefined) {
    error(`Chave "${key}" existe em EN mas não em PT`);
  } else if (!translations.pt[key]) {
    error(`Chave "${key}" está vazia em PT`);
  }
}

// PT e EN têm o mesmo número de chaves
if (ptKeys.length === enKeys.length) {
  ok(`PT e EN têm o mesmo número de chaves (${ptKeys.length})`);
} else {
  error(`PT tem ${ptKeys.length} chaves, EN tem ${enKeys.length} chaves — divergência`);
}

console.log('\n═══════════════════════════════════════════');
console.log(`  Resultado: ${pass} passou(aram) | ${fail} falhou(aram)`);
console.log('═══════════════════════════════════════════\n');

process.exit(fail > 0 ? 1 : 0);
