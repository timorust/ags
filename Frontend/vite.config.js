import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    proxy: {
      '/conference': {
        target: 'http://localhost:4003',
        changeOrigin: true,
      },
      '/registration': {
        target: 'http://localhost:4003',
        changeOrigin: true,
      },
      '/user': {
        target: 'http://localhost:4003',
        changeOrigin: true,
      },
      '/payment': {
        target: 'http://localhost:4003',
        changeOrigin: true,
      },
      '/locales': {
        target: 'http://localhost:4003',
        changeOrigin: true,
      },
    },
  },
})