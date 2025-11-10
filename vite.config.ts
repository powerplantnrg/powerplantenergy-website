import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  root: './client',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: '../dist',
  },
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
    hmr: {
      clientPort: 3000,
    },
    allowedHosts: ['all'],
  },
});

