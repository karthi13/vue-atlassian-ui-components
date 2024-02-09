import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
  }
})
