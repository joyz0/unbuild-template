import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
    coverage: {
      include: ['src/**'],
      reporter: ['text', 'clover', 'json'],
    },
  },
})
