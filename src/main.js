import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import "@unocss/reset/tailwind.css";
import 'uno.css'
import 'element-plus/dist/index.css'
import { router } from '~/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

Object.values(import.meta.globEager('./modules/*.js')).forEach(function (i) {
  return i.install?.({ app, router })
})

app.mount("#app");
