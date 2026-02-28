#!/bin/bash

echo "🚀 Starting autobuild..."

# Navigate to code repo
cd ../giolaga.com-code/

# Extract version from package.json
VERSION=$(node -p "require('./package.json').version")
echo "📦 Building version: v$VERSION"

# Build the project
npm run build

# Navigate to deploy repo
cd ../iamgiolaga.github.io/

# Remove old files from root (current version)
echo "🧹 Cleaning old files from root..."
rm -f asset-manifest.json cv.ico cv.png index.html manifest.json me.jpg thumbnail.webp me1.webp
rm -rf static/

# Copy new build to root (current version)
echo "📂 Deploying to root..."
cd ..
cp -r giolaga.com-code/build/* iamgiolaga.github.io/

# Note: We don't archive the current version in a separate folder
# since it's already served from root. Archive only happens during release.

# Clean up build folder
rm -rf giolaga.com-code/build

echo "✅ Build complete!"
echo "   - Root updated (current version)"
