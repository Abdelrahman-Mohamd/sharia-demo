import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Optimize build output
    minify: 'terser',
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Ensure proper file extensions
    rollupOptions: {
      output: {
        // Better code splitting
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          animation: ['motion']
        },
        // Ensure proper file naming with extensions
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/[name]-[hash].[ext]`;
          }
          if (/css/i.test(ext)) {
            return `assets/[name]-[hash].css`;
          }
          return `assets/[name]-[hash].[ext]`;
        }
      }
    }
  },
  // Ensure proper base path for deployment
  base: '/',
  // Preview settings for local testing
  preview: {
    port: 3000,
    host: true
  }
})
