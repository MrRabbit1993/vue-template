import { defineConfig } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.ts', '.tsx', '.json', '.scss', '.json', '.vue']
  },
})
