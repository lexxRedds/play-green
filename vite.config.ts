import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: process.env.NODE_ENV === 'production' ? 'dist/prod' : 'dist/dev',
  },
})
