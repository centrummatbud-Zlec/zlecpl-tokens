# @zlecpl/tokens

Design tokens dla [Zlec.pl](https://zlec.pl) — jedno źródło prawdy dla kolorów, typografii, spacingu, cieni i border-radius.

Pakiet generuje 4 formaty wyjściowe z jednego pliku `design-tokens.json`:

| Format | Ścieżka | Użycie |
|--------|---------|--------|
| CSS Custom Properties | `@zlecpl/tokens/css` | `var(--zlec-brand-primary)` |
| SCSS variables | `@zlecpl/tokens/scss` | `$zlec-brand-primary` |
| ES6 named exports | `@zlecpl/tokens` | `color.brand.primary` |
| TypeScript declarations | (auto) | pełne typy dla TS |

---

## Instalacja

```bash
npm install @zlecpl/tokens
```

---

## Użycie

### CSS Custom Properties

```css
@import '@zlecpl/tokens/css';

.button-primary {
  background: var(--zlec-brand-primary);
  border-radius: var(--zlec-radius-md);
  padding: var(--zlec-spacing-md) var(--zlec-spacing-xl);
  color: #fff;
  font-family: var(--zlec-type-family-base);
  font-weight: var(--zlec-type-weight-semibold);
}
```

Dark mode działa automatycznie przez `prefers-color-scheme`, lub ręcznie przez atrybut `data-theme="dark"` na `<html>`.

### SCSS Variables

```scss
@use '@zlecpl/tokens/scss';

.card {
  background: $zlec-surface-card;
  border-radius: $zlec-radius-lg;
  box-shadow: $zlec-shadow-md;
  padding: $zlec-spacing-xl;
}
```

### JavaScript / TypeScript

```ts
import { color, spacing, radius, shadow, typography } from '@zlecpl/tokens';

const styles = {
  backgroundColor: color.brand.primary,
  borderRadius: radius.md,
  padding: `${spacing.md} ${spacing.xl}`,
  boxShadow: shadow.md,
};
```

---

## Dostępne tokeny

### Kolory

| Token | Wartość | Opis |
|-------|---------|------|
| `brand.primary` | `#E8470A` | CTA, akcenty |
| `brand.dark` | `#C53A08` | Hover/pressed |
| `brand.tint` | `rgba(232,71,10,0.12)` | Tło z akcentem |
| `navy.base` | `#1A2B4A` | Kolor główny tekstu (light) |
| `navy.mid` | `#2D4066` | Karty, tła sekcji |
| `navy.light` | `#3D5280` | Ikony, obramowania |
| `surface.bg` | `#F4F5F8` | Tło strony |
| `surface.card` | `#FFFFFF` | Karty, inputy |
| `text.primary` | `#1A2B4A` | Główny tekst |
| `text.secondary` | `#64748B` | Dodatkowy tekst |
| `status.success` | `#10B981` | — |
| `status.warning` | `#F59E0B` | — |
| `status.error` | `#EF4444` | — |
| `status.info` | `#8B5CF6` | — |

### Spacing

`xs` (4px) · `sm` (8px) · `md` (12px) · `lg` (16px) · `xl` (24px) · `2xl` (32px)

### Border Radius

`sm` (8px) · `md` (12px) · `lg` (16px) · `xl` (20px) · `full` (999px)

### Typografia

- **Font:** Plus Jakarta Sans
- - **Rozmiary:** `xs` (11px) · `sm` (13px) · `base` (15px) · `lg` (17px) · `xl` (20px) · `2xl` (24px) · `3xl` (30px)
  - - **Wagi:** `regular` (400) · `medium` (500) · `semibold` (600) · `bold` (700)
   
    - ### Cienie
   
    - `shadow.sm` · `shadow.md` · `shadow.lg`
   
    - ---

    ## Dark mode

    ```css
    /* Automatyczne — przez system OS */
    @media (prefers-color-scheme: dark) { … }

    /* Ręczne — przez atrybut HTML */
    <html data-theme="dark">
    ```

    ---

    ## Aktualizacja tokenów

    Po każdej zmianie w `design-tokens.json` i wstawieniu tagu `v*` GitHub Actions automatycznie publikuje nową wersję na npm.

    ```bash
    node scripts/build.js      # lokalny build
    git tag v1.1.0 && git push --tags  # publish przez CI
    ```

    ---

    ## Licencja

    MIT © [Zlec.pl](https://zlec.pl)
