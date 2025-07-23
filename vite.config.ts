import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: '/manifest.json',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
        globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],
      },
    }),
  ],
});
