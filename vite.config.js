import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
    port: 3000,
  },
  css: {
    postcss: './postcss.config.js',
  },
  base: '/refbook',
  test: {
    globals: true,            
    environment: 'jsdom',  
    setupFiles: './tests/setup.js',
    exclude: [...configDefaults.exclude],
  },
});
