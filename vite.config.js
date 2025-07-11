import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/coffee-kiosk-sim/',
  test: {
    environment: 'jsdom',
    globals: true
  }
});
