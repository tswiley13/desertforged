import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on the custom domain and on GitHub Pages previews.
export default defineConfig({
  plugins: [react()],
  base: './',
})
