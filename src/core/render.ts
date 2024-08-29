import { createApp } from 'vue'
import App from '@/App.vue'
// import router from '@/router'
const render = (props: { container: HTMLElement | string }) => {
  const { container } = props
  const app = createApp(App)
  // app.use(router)
  app.mount(container)
}
export default render
