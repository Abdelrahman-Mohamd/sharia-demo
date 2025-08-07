#!/usr/bin/env node

/**
 * Netlify Deployment Verification Script
 * Verifies that all build outputs are correct and ready for deployment
 */

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const requiredFiles = [
  'index.html',
  'assets/index-DKlcZ3q6.css',
  'assets/index-Bnt4Sm8j.js',
  'assets/vendor-DOHx2j1n.js',
  'assets/mui-DQCCjHF3.js',
  'assets/animation-I1QP4p7S.js'
];

console.log('🔍 Verifying Netlify deployment setup...\n');

// Check if dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ dist directory not found! Run npm run build first.');
  process.exit(1);
}

// Check required files
let allFilesExist = true;
requiredFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log(`❌ ${file} - Missing!`);
    allFilesExist = false;
  }
});

// Check configuration files
const configFiles = [
  { file: 'netlify.toml', desc: 'Netlify configuration' },
  { file: 'public/_headers', desc: 'HTTP headers configuration' },
  { file: 'public/_redirects', desc: 'SPA routing configuration' },
  { file: '.github/workflows/deploy.yml', desc: 'GitHub Actions CI/CD' }
];

console.log('\n📋 Configuration files:');
configFiles.forEach(({ file, desc }) => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file} - ${desc}`);
  } else {
    console.log(`❌ ${file} - Missing! ${desc}`);
    allFilesExist = false;
  }
});

// Check package.json scripts
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const requiredScripts = ['build', 'type-check', 'lint'];

console.log('\n🔧 Required npm scripts:');
requiredScripts.forEach(script => {
  if (packageJson.scripts[script]) {
    console.log(`✅ npm run ${script}`);
  } else {
    console.log(`❌ npm run ${script} - Missing!`);
    allFilesExist = false;
  }
});

console.log('\n📊 Summary:');
if (allFilesExist) {
  console.log('🎉 All files and configurations are ready for Netlify deployment!');
  console.log('\n📝 Next steps:');
  console.log('1. Commit and push changes to GitHub');
  console.log('2. Connect repository to Netlify');
  console.log('3. Add NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID secrets to GitHub');
  console.log('4. Push to main branch to trigger automatic deployment');
} else {
  console.log('❌ Some required files are missing. Please check the errors above.');
  process.exit(1);
}
