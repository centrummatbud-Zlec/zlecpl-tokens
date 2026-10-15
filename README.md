# Zlec.pl Design Tokens

Zrodlo prawdy dla kolorow, spacingow, typografii i cieni aplikacji Zlec.pl.  
Tokeny tworzone w Penpot (plugin Penpot Tokens) i eksportowane do W3C Design Tokens JSON.

## Struktura

```
design-tokens.json          <- Zrodlo (W3C format, edytuj w Penpot)
style-dictionary.config.json <- konfiguracja buildu
build/
  css/variables.css         <- CSS Custom Properties (:root)
  js/tokens.js              <- ES6 named exports
  js/tokens.d.ts            <- TypeScript declarations
```

## Uzycie CSS

```css
/* W glownym pliku CSS / entry point */
@import '@zlecpl/tokens/build/css/variables.css';

/* Uzycie */
.btn-primary {
  background: var(--zlec-brand-primary);
  border-radius: var(--zlec-radius-full);
  padding: var(--zlec-spacing-md) var(--zlec-spacing-xl);
  font-size: var(--zlec-type-size-base);
  font-weight: var(--zlec-type-weight-semibold);
  box-shadow: var(--zlec-shadow-sm);
}
```

## Uzycie JS / TypeScript

```ts
import { color, spacing, typography, tokens } from './build/js/tokens.js';

// Pojedyncze wartosci
const primary = color.brand.primary; // '#E8470A'
const gap = spacing.lg;              // '16px'

// Wszystko naraz
console.log(tokens.shadow.md); // '0 4px 12px rgba(0,0,0,0.12)'
```

## Regeneracja po zmianie tokenow w Penpot

1. W Penpot -> zakladka **TOKENS** -> **TOOLS** -> **Eksportuj** -> pobierz JSON
2. Zastap `design-tokens.json` nowym plikiem
3. Uruchom:

```bash
npx style-dictionary build --config style-dictionary.config.json
```

> Wymaga: `npm install style-dictionary` (jednorazowo)

## Dark mode

Dark mode tokeny sa zawarte w `variables.css`:
- automatycznie przez `@media (prefers-color-scheme: dark)`
- recznie przez atrybut `<html data-theme="dark">`

## Konwencja nazewnictwa CSS

| Token | CSS variable |
|---|---|
| `brand.primary` | `--zlec-brand-primary` |
| `spacing.lg` | `--zlec-spacing-lg` |
| `type.size.base` | `--zlec-type-size-base` |
| `shadow.md` | `--zlec-shadow-md` |

## Penpot View Link

Design system (komponenty + ekrany) dostepny w trybie podgladu:  
`https://design.penpot.app/#/view?file-id=52a5041f-...`  
*(link wklej tutaj po skopiowaniu z Penpot)*
