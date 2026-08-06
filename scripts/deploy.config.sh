# Shared deploy configuration.
# Sourced by deploy-client.sh / deploy-server.sh — not meant to be run directly.

# Repo root = parent of this scripts/ directory (resolved no matter where you run from).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# --- Production targets (same machine → local rsync, no SSH) ---
DEPLOY_ROOT="/var/www/nude-pineapple"
CLIENT_DEST="$DEPLOY_ROOT/client"
SERVER_DEST="$DEPLOY_ROOT/server"

# --- Client (Vite) ---
CLIENT_BUILD="$REPO_ROOT/dist"          # vite outDir

# --- Server (Node API) — not in the repo yet; defaults ready for when it is ---
SERVER_SRC="$REPO_ROOT/server"          # where your Node API will live in the repo
SERVER_ENTRY="index.js"                 # entry file, relative to SERVER_DEST
SERVER_APP_NAME="nude-pineapple-api"    # pm2 process name (listens on :3000)
