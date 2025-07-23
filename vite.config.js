import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/login': 'http://localhost:5000',
      '/users': 'http://localhost:5000',
      '/formulario': 'http://localhost:5000',
    }
  }
});
