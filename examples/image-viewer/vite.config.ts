import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv, UserConfig } from 'vite';

export default (): UserConfig => {
  return defineConfig({
    plugins: [
      react()
    ],
    define: process.env.NODE_ENV === 'development' ? { global: 'window' } : {},
    server: {
      port: 8001,
    },
    base: '/tools/image'
  });
}
