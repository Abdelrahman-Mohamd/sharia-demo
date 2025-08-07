@echo off
echo 🕌 Preparing Sharia Compliance Analyzer for deployment...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist dist rmdir /s /q dist

REM Install dependencies
echo 📦 Installing dependencies...
npm ci

REM Run linting
echo 🔍 Running linter...
npm run lint

REM Build for production
echo 🏗️  Building for production...
npm run build:production

REM Test the build locally
echo 🧪 Testing build locally...
echo You can test the build by running: npm run serve

echo ✅ Deployment preparation complete!
echo.
echo 📋 Next steps for Netlify deployment:
echo 1. Create a new site on Netlify
echo 2. Choose 'Deploy manually' or connect to Git
echo 3. If manual: drag and drop the 'dist' folder
echo 4. If Git: use these build settings:
echo    - Build command: npm run build
echo    - Publish directory: dist
echo    - Node version: 18 or higher
echo.
echo 🌐 Your app will be available at: https://your-site-name.netlify.app

pause
