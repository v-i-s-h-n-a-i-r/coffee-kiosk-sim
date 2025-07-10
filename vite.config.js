// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,         // ✅ enables `expect`, `describe`, etc. globally
    environment: 'jsdom',  // ✅ simulates browser DOM for testing components
    setupFiles: './vitest.setup.js'
  }
});
