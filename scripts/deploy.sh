#!/usr/bin/env bash
# Deploy both client and server.
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Pull from GitHub and refresh the Steam numbers before anything is built.
"$DIR/sync-before-build.sh"

"$DIR/deploy-client.sh"
"$DIR/deploy-server.sh"


# Record the deployed commit so the admin panel can compare what is live against
# what is in the repo. /var/www carries no .git, so without this production has
# no version information at all. Never fails the deploy.
# shellcheck source=/dev/null
source "$DIR/deploy.config.sh"
deploy-stamp "$REPO_ROOT" "$DEPLOY_ROOT" || true

echo "✓ Full deploy complete."
