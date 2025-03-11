import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Sai-Rohit-portfolio/', // <-- ADD THIS LINE
  plugins: [react()],
})
