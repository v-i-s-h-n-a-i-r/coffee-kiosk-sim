// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/coffee-kiosk-sim/', // GitHub Pages base path

  test: {
    environment: 'jsdom', // Enables browser-like test behavior
    globals: true          // Enables `describe`, `it`, `expect`, `vi` without importing
  }
});
