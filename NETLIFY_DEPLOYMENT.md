# Netlify CI/CD Deployment Guide

## Quick Setup for GitHub → Netlify Deployment

### 1. Push to GitHub
```bash
git add .
git commit -m "Configure for Netlify CI/CD deployment"
git push origin main
```

### 2. Connect to Netlify
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and select your repository
4. Configure build settings:
   - **Branch to deploy**: `main` (or `master`)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (automatically detected from .nvmrc)

### 3. Environment Variables (if needed)
- No environment variables required for this build
- All configuration is handled via netlify.toml and _headers

## Files Configured for CI/CD

✅ **netlify.toml** - Main Netlify configuration
✅ **public/_headers** - Backup MIME type configuration  
✅ **.nvmrc** - Node.js version specification
✅ **package.json** - Updated build scripts
✅ **.github/workflows/build.yml** - GitHub Actions (optional)

## MIME Type Issue Resolution

### Problem
- Netlify serving JavaScript files with `application/octet-stream` MIME type
- Causing "Expected a JavaScript-or-Wasm module script" error

### Solution Applied
1. **netlify.toml headers**: Force correct MIME types for all JS files
2. **_headers file**: Redundant configuration for reliability
3. **Comprehensive patterns**: `/**/*.js` catches all nested JavaScript files
4. **Vite config**: Optimized build output with proper file extensions

## Build Process
1. **Dependencies**: `npm ci` (clean install)
2. **TypeScript**: `tsc -b` (build TypeScript)  
3. **Vite**: `vite build` (bundle and optimize)
4. **Output**: `dist/` directory with optimized assets

## Expected Result
- ✅ No MIME type errors
- ✅ JavaScript modules load correctly
- ✅ SPA routing works properly
- ✅ All interactive features functional
- ✅ Proper caching and security headers

## Troubleshooting
If issues persist:
1. Check Netlify build logs for errors
2. Verify Node.js version is 18+
3. Ensure all dependencies install correctly
4. Test build locally with `npm run build && npm run preview`

Your Sharia Contract Analyzer should deploy successfully! 🎉
