#!/usr/bin/env bash
# Sync the Node API to production, install prod deps, and (re)start it.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/deploy.config.sh"

echo "▶ SERVER  →  $SERVER_DEST"

# No server in the repo yet → skip cleanly so `deploy.sh` (both) still works.
if [ ! -d "$SERVER_SRC" ]; then
  echo "• No server source at $SERVER_SRC yet — skipping."
  echo "  Add your Node API there, then re-run this script."
  exit 0
fi

echo "• Syncing $SERVER_SRC/ → $SERVER_DEST/ (keeping node_modules & .env on the server)"
mkdir -p "$SERVER_DEST"
rsync -a --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.env' \
  "$SERVER_SRC/" "$SERVER_DEST/"

echo "• Installing production deps…"
cd "$SERVER_DEST"
yarn install --production --frozen-lockfile

# --- (Re)start the API process (listens on 127.0.0.1:3000 behind nginx) ---
if command -v pm2 >/dev/null 2>&1; then
  if pm2 describe "$SERVER_APP_NAME" >/dev/null 2>&1; then
    echo "• Reloading pm2 app '$SERVER_APP_NAME'…"
    pm2 reload "$SERVER_APP_NAME"
  else
    echo "• Starting pm2 app '$SERVER_APP_NAME'…"
    pm2 start "$SERVER_DEST/$SERVER_ENTRY" --name "$SERVER_APP_NAME"
    pm2 save
  fi
else
  echo "⚠ pm2 not found — code synced but process NOT restarted."
  echo "  Start the API manually on :3000 (or install pm2)."
fi

echo "✓ Server deployed."
