import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/d4destimator/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
