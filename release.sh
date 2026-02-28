#!/bin/bash

set -e

echo "🚀 Starting release process..."

# Get version from package.json
VERSION=$(node -p "require('./package.json').version")
echo "📦 Version: v$VERSION"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json not found. Run this script from giolaga.com-code directory."
  exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "📝 Uncommitted changes detected. Committing..."
  git add .
  read -p "Enter commit message (or press Enter for default): " COMMIT_MSG
  if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Release v$VERSION"
  fi
  git commit -m "$COMMIT_MSG"
else
  echo "✓ No uncommitted changes"
fi

# Create tag in code repo
echo "🏷️  Creating tag v$VERSION in code repo..."
git tag -a "v$VERSION" -m "Version $VERSION" 2>/dev/null || echo "   Tag already exists, skipping..."

# Push code and tags
echo "⬆️  Pushing code repo..."
git push
git push --tags

# Build and deploy
echo "🔨 Building and deploying..."

# Archive previous version before overwriting root
echo "📂 Archiving previous version..."
cd ../iamgiolaga.github.io
# Extract previous version from root index.html (looking for version number in the footer)
PREV_VERSION=$(grep -o 'giolaga.com - v[0-9.]*' index.html | grep -o 'v[0-9.]*' | head -1)

if [ -n "$PREV_VERSION" ] && [ "$PREV_VERSION" != "v$VERSION" ]; then
  echo "   Archiving $PREV_VERSION before deploying v$VERSION..."
  mkdir -p "$PREV_VERSION"
  cp -r asset-manifest.json cv.ico cv.png index.html manifest.json me.jpg thumbnail.webp static/ "$PREV_VERSION/" 2>/dev/null || true
  # Also copy me1.webp if it exists
  [ -f me1.webp ] && cp me1.webp "$PREV_VERSION/"
  echo "   ✓ $PREV_VERSION archived"
else
  echo "   No previous version to archive (current: $PREV_VERSION)"
fi

cd ../giolaga.com-code
sh autobuild.sh

# Update versions page
echo "📄 Updating versions page..."
VERSIONS_FILE="versions-page/index.html"

# Get current date
CURRENT_DATE=$(date +"%b %Y")

# Check if version already exists in the file
if grep -q "{ tag: 'v$VERSION'" "$VERSIONS_FILE"; then
  echo "   Version v$VERSION already in versions page"
else
  # Add new version at the top of the allVersions array
  sed -i '' "s/const allVersions = \[/const allVersions = [\n            { tag: 'v$VERSION', date: '$CURRENT_DATE' },/" "$VERSIONS_FILE"
  echo "   ✓ Added v$VERSION to versions page"
  
  # Copy updated versions page to deploy repo
  cp "$VERSIONS_FILE" ../iamgiolaga.github.io/versions/index.html
fi

# Navigate to deploy repo
cd ../iamgiolaga.github.io

# Commit everything
echo "📦 Committing in deploy repo..."
git add .
git commit -m "Release v$VERSION"

# Create tag in deploy repo
echo "🏷️  Creating tag v$VERSION in deploy repo..."
git tag -a "v$VERSION" -m "Version $VERSION" 2>/dev/null || echo "   Tag already exists, skipping..."

# Push
echo "⬆️  Pushing deploy repo..."
git push
git push --tags

# Return to code repo
cd ../giolaga.com-code

echo ""
echo "✅ Release v$VERSION completed successfully!"
echo ""
echo "📍 Changes:"
echo "   - Code repo: committed, tagged, and pushed"
echo "   - Built and deployed to root"
echo "   - Archived in /v$VERSION/"
echo "   - Versions page updated"
echo "   - Deploy repo: committed, tagged, and pushed"
echo ""
echo "🌐 Your site is now live at:"
echo "   - https://giolaga.com (v$VERSION)"
echo "   - https://giolaga.com/v$VERSION/ (archived)"
echo "   - https://giolaga.com/versions/ (version selector)"
