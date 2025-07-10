import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/coffee-kiosk-sim/', // Change if your repo name is different
  plugins: [react()],
});
