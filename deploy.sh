#!/bin/bash

# Sharia Compliance Analyzer - Deployment Preparation Script

echo "🕌 Preparing Sharia Compliance Analyzer for deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build for production
echo "🏗️  Building for production..."
npm run build:production

# Test the build locally
echo "🧪 Testing build locally..."
echo "You can test the build by running: npm run serve"

echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next steps for Netlify deployment:"
echo "1. Create a new site on Netlify"
echo "2. Choose 'Deploy manually' or connect to Git"
echo "3. If manual: drag and drop the 'dist' folder"
echo "4. If Git: use these build settings:"
echo "   - Build command: npm run build"
echo "   - Publish directory: dist"
echo "   - Node version: 18 or higher"
echo ""
echo "🌐 Your app will be available at: https://your-site-name.netlify.app"
