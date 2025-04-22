import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swiper': 'swiper/swiper-bundle.min.js', // Ensure this path matches your Swiper version
    },
  },

});
