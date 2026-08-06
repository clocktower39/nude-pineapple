#!/usr/bin/env bash
# Build the Vite client and sync it to production.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/deploy.config.sh"

echo "▶ CLIENT  →  $CLIENT_DEST"
cd "$REPO_ROOT"

echo "• Installing deps (yarn)…"
yarn install --frozen-lockfile

echo "• Building (vite)…"
yarn build

echo "• Syncing $CLIENT_BUILD/ → $CLIENT_DEST/"
mkdir -p "$CLIENT_DEST"
rsync -a --delete "$CLIENT_BUILD/" "$CLIENT_DEST/"

echo "✓ Client deployed."
