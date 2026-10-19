# Zlec.pl Design Tokens

Źródło prawdy dla kolorów, spacingów, typografii i cieni aplikacji Zlec.pl.  
Tokeny tworzone w Penpot (plugin Penpot Tokens) i eksportowane do W3C Design Tokens JSON.

## Instalacja

```bash
npm install zlecpl-tokens
```

## Struktura

```
design-tokens.json        ← Źródło (W3C format, edytuj w Penpot)
scripts/build.js          ← skrypt budujący (pure Node.js)
build/
  css/variables.css       ← CSS Custom Properties (:root + dark mode)
  scss/_tokens.scss       ← SCSS variables, map, function, mixin
  js/tokens.js            ← ES6 named exports
  js/tokens.d.ts          ← TypeScript declarations
```

## Użycie CSS

```css
/* import przez package exports */
@import 'zlecpl-tokens/css';

/* lub bezpośrednio */
@import 'zlecpl-tokens/build/css/variables.css';

/* Użycie */
.btn-primary {
  background: var(--zlec-brand-primary);
  border-radius: var(--zlec-radius-full);
  padding: var(--zlec-spacing-md) var(--zlec-spacing-xl);
  font-size: var(--zlec-type-size-base);
  font-weight: var(--zlec-type-weight-semibold);
  box-shadow: var(--zlec-shadow-sm);
}
```

Dark mode działa automatycznie przez `@media (prefers-color-scheme: dark)`  
oraz atrybut `[data-theme="dark"]` na elemencie root.

## Użycie SCSS

```scss
// import przez package exports
@use 'zlecpl-tokens/scss' as *;

// lub bezpośrednio
@use 'zlecpl-tokens/build/scss/tokens' as *;

// Zmienne SCSS
.btn-primary {
  background: $zlec-brand-primary;
  border-radius: $zlec-radius-full;
  padding: $zlec-spacing-md $zlec-spacing-xl;
}

// Funkcja pomocnicza (dostęp przez mapę)
.link {
  color: zlec-token('brand-primary');
}

// Mixin dark mode
@include zlec-dark-mode {
  .card {
    background: $zlec-dark-surface-bg;
    color: $zlec-dark-text-primary;
  }
}
```

## Użycie JS / TypeScript

```ts
import { color, spacing, typography, shadow, tokens } from 'zlecpl-tokens';

// Pojedyncze wartości
const primary = color.brand.primary;   // '#E8470A'
const gap = spacing.lg;                // '16px'
const font = typography.size.base;     // '16px'

// Wszystko naraz
console.log(tokens.shadow.md);         // '0 4px 12px rgba(0,0,0,0.12)'
```

## Regeneracja po zmianie tokenów w Penpot

1. W Penpot → zakładka **TOKENS** → **TOOLS** → **Eksportuj** → pobierz JSON
2. Zastąp `design-tokens.json` nowym plikiem
3. Commit na `main` — CI zbuduje i skomituje pliki `build/` automatycznie

Lokalnie:

```bash
node scripts/build.js
```

## Publikacja nowej wersji na npm

1. Zaktualizuj `version` w `package.json`
2. Utwórz i wypchnij tag:

```bash
git tag v1.1.0
git push origin v1.1.0
```

GitHub Actions automatycznie opublikuje pakiet na npm (wymaga ustawionego sekretu `NPM_TOKEN`).
