import vue from '@vitejs/plugin-vue'
import createSvgIcon from './svg-icon'

export default function createVitePlugins() {
  const plugins = [
    vue(),
    createSvgIcon()
  ]
  return plugins
}
