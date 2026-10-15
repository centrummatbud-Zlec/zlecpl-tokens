#!/bin/bash
# scripts/update-tokens.sh
# Przebuduj tokeny po edycji design-tokens.json
# Użycie: npm run update   lub   bash scripts/update-tokens.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPT_DIR/.."

echo "🔄 Aktualizacja tokenów Zlec.pl..."
echo ""

# Sprawdź czy plik źródłowy istnieje
if [ ! -f "$ROOT/design-tokens.json" ]; then
  echo "❌ Nie znaleziono design-tokens.json w $ROOT"
  exit 1
fi

# Uruchom build
node "$ROOT/scripts/build.js"

echo ""
echo "📁 Pliki wyjściowe:"
echo "   build/css/variables.css   — CSS Custom Properties"
echo "   build/js/tokens.js        — ES6 named exports"
echo "   build/js/tokens.d.ts      — TypeScript declarations"
