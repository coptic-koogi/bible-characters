#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# One-command publish — pushes this repository to YOUR GitHub account.
#
# Prerequisites (one of):
#   a) GitHub CLI installed and logged in:  gh auth login
#   b) or an existing empty repo + git credentials (the script falls back to it)
#
# Usage:  bash publish.sh [your-github-username] [repo-name]
# ---------------------------------------------------------------------------
set -e

USERNAME="${1:-}"
REPO_NAME="${2:-bible-characters-landing}"
cd "$(dirname "$0")"

echo "==> Bible Characters Landing — publisher"

# 1. init git if needed
if [ ! -d .git ]; then
  git init -b main
  echo "==> git repository initialized (branch: main)"
fi

# 2. commit everything
git add -A
if git diff --cached --quiet; then
  echo "==> nothing new to commit"
else
  git commit -m "Landing page & live demo — Bible Characters Encyclopedia (ar/en/fr/es)"
  echo "==> committed"
fi

# 3. remote
if git remote get-url origin >/dev/null 2>&1; then
  echo "==> remote already set: $(git remote get-url origin)"
else
  if command -v gh >/dev/null 2>&1; then
    echo "==> creating private/public repo '$REPO_NAME' with GitHub CLI…"
    gh repo create "$REPO_NAME" --public --source=. --remote=origin --description "Landing page & live demo — Bible Characters Encyclopedia · 3,026 documented profiles in 4 languages"
  else
    if [ -z "$USERNAME" ]; then
      echo "!! GitHub CLI (gh) not found."
      echo "!! Create an empty repository named '$REPO_NAME' on github.com, then run:"
      echo "!!     git remote add origin git@github.com:YOUR_USERNAME/$REPO_NAME.git"
      echo "!!     git push -u origin main"
      echo "!! …or install gh (https://cli.github.com) and re-run this script."
      exit 1
    fi
    git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"
    echo "==> remote added: https://github.com/$USERNAME/$REPO_NAME.git"
  fi
fi

# 4. push
git push -u origin main
echo ""
echo "✓ Pushed. Next steps:"
echo "  1. Open the repo on GitHub → Settings → Pages"
echo "  2. Source: 'GitHub Actions'  (the included workflow will deploy on every push)"
echo "  3. Your page: https://<your-username>.github.io/$REPO_NAME/"
echo ""
echo "  Remember to replace USERNAME in src/lib/landing/links.ts with '$USERNAME'"
echo "  so the header/footer GitHub buttons point to the right place."
