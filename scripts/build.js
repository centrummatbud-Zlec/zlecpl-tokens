#!/usr/bin/env node
// scripts/build.js — Custom build script dla Zlec.pl design tokens
// Brak zależności — czysty Node.js (ESM)
// Użycie: node scripts/build.js

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Wczytaj tokeny ──────────────────────────────────────────────────────────
const tokens = JSON.parse(readFileSync(join(ROOT, 'design-tokens.json'), 'utf8'));

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Spłaszcza drzewo tokenów do płaskiej mapy { 'brand-primary': '#E8470A', ... } */
function flattenTokens(obj, prefix = '', result = {}) {
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$') || key === '_comment') continue;
    const path = prefix ? `${prefix}-${key}` : key;
    if (val && typeof val === 'object' && '$value' in val) {
      result[path] = val.$value;
    } else if (val && typeof val === 'object') {
      flattenTokens(val, path, result);
    }
  }
  return result;
}

/** Buduje zagnieżdżony obiekt JS z wartościami $value */
function buildJSObj(obj) {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$') || key === '_comment') continue;
    if (val && typeof val === 'object' && '$value' in val) {
      result[key] = val.$value;
    } else if (val && typeof val === 'object') {
      result[key] = buildJSObj(val);
    }
  }
  return result;
}

/** Generuje deklaracje TypeScript dla zagnieżdżonego obiektu */
function toTSType(obj, indent = 1) {
  const pad = '  '.repeat(indent);
  return Object.entries(obj).map(([k, v]) => {
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`;
    if (typeof v === 'object' && v !== null) {
      return `${pad}${key}: {\n${toTSType(v, indent + 1)}\n${pad}};`;
    }
    return `${pad}${key}: string;`;
  }).join('\n');
}

// ── Wyodrębnij tokeny light / dark ──────────────────────────────────────────
const darkGroup = tokens.dark || {};
const lightGroup = Object.fromEntries(
  Object.entries(tokens).filter(([k]) => k !== 'dark' && !k.startsWith('$') && k !== '_comment')
);

const flatLight = flattenTokens(lightGroup);
const flatDark  = flattenTokens(darkGroup);

// ── Dark-mode overrides (mapuj dark.surface.bg → --zlec-surface-bg) ─────────
function buildDarkOverrides() {
  const lines = [];
  const mapping = {
    surface: 'surface',
    text:    'text',
    border:  'border',
    navy:    'navy',
  };
  for (const [darkKey, lightKey] of Object.entries(mapping)) {
    const group = darkGroup[darkKey];
    if (!group) continue;
    for (const [prop, val] of Object.entries(group)) {
      if (val && typeof val === 'object' && '$value' in val) {
        lines.push(`  --zlec-${lightKey}-${prop}: ${val.$value};`);
      }
    }
  }
  return lines.join('\n');
}

// ── Generuj CSS ─────────────────────────────────────────────────────────────
const lightVars = Object.entries(flatLight)
  .map(([k, v]) => `  --zlec-${k}: ${v};`)
  .join('\n');

const darkOverrides = buildDarkOverrides();

const css = `/* Wygenerowane przez scripts/build.js — nie edytować ręcznie */
/* Zlec.pl Design Tokens v${JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version} */

:root {
${lightVars}
}

/* Dark mode — automatyczne przełączanie systemowe */
@media (prefers-color-scheme: dark) {
  :root {
${darkOverrides}
  }
}

/* Dark mode — ręczne przełączanie przez atrybut data-theme="dark" */
[data-theme="dark"] {
${darkOverrides}
}
`;

// ── Generuj JS ──────────────────────────────────────────────────────────────
const jsTokens = {
  color: {
    brand:   buildJSObj(tokens.brand   || {}),
    navy:    buildJSObj(tokens.navy    || {}),
    surface: buildJSObj(tokens.surface || {}),
    text:    buildJSObj(tokens.text    || {}),
    border:  buildJSObj(tokens.border  || {}),
    status:  buildJSObj(tokens.status  || {}),
  },
  radius:     buildJSObj(tokens.radius  || {}),
  spacing:    buildJSObj(tokens.spacing || {}),
  typography: buildJSObj(tokens.type    || {}),
  shadow:     buildJSObj(tokens.shadow  || {}),
  dark: {
    surface: buildJSObj(darkGroup.surface || {}),
    text:    buildJSObj(darkGroup.text    || {}),
    border:  buildJSObj(darkGroup.border  || {}),
    navy:    buildJSObj(darkGroup.navy    || {}),
  },
};

const js = `// Wygenerowane przez scripts/build.js — nie edytować ręcznie
// Zlec.pl Design Tokens

export const color = ${JSON.stringify(jsTokens.color, null, 2)};

export const radius = ${JSON.stringify(jsTokens.radius, null, 2)};

export const spacing = ${JSON.stringify(jsTokens.spacing, null, 2)};

export const typography = ${JSON.stringify(jsTokens.typography, null, 2)};

export const shadow = ${JSON.stringify(jsTokens.shadow, null, 2)};

export const darkTokens = ${JSON.stringify(jsTokens.dark, null, 2)};

/** Wszystkie tokeny w jednym obiekcie */
export const tokens = {
  color,
  radius,
  spacing,
  typography,
  shadow,
  dark: darkTokens,
};

export default tokens;
`;

// ── Generuj TypeScript declarations ─────────────────────────────────────────
function declareConst(name, obj) {
  return `export declare const ${name}: {\n${toTSType(obj)}\n};`;
}

const dts = `// Wygenerowane przez scripts/build.js — nie edytować ręcznie
// Zlec.pl Design Tokens — TypeScript declarations

${declareConst('color',      jsTokens.color)}

${declareConst('radius',     jsTokens.radius)}

${declareConst('spacing',    jsTokens.spacing)}

${declareConst('typography', jsTokens.typography)}

${declareConst('shadow',     jsTokens.shadow)}

${declareConst('darkTokens', jsTokens.dark)}

export declare const tokens: {
  color: typeof color;
  radius: typeof radius;
  spacing: typeof spacing;
  typography: typeof typography;
  shadow: typeof shadow;
  dark: typeof darkTokens;
};

export default tokens;
`;

// ── Zapisz pliki ─────────────────────────────────────────────────────────────
mkdirSync(join(ROOT, 'build/css'), { recursive: true });
mkdirSync(join(ROOT, 'build/js'),  { recursive: true });

writeFileSync(join(ROOT, 'build/css/variables.css'), css,  'utf8');
writeFileSync(join(ROOT, 'build/js/tokens.js'),      js,   'utf8');
writeFileSync(join(ROOT, 'build/js/tokens.d.ts'),    dts,  'utf8');

console.log('✅ Build zakończony pomyślnie!');
console.log('   📄 build/css/variables.css   — CSS Custom Properties');
console.log('   📄 build/js/tokens.js        — ES6 named exports');
console.log('   📄 build/js/tokens.d.ts      — TypeScript declarations');
