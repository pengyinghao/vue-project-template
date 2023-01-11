import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'
import './styles/index.scss'

const app = createApp(App)
setupPinia(app)

app.mount('#app')
