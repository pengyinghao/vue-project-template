import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import useAppStore from './modules/app'

export function setupPinia(app: App) {
    const pinia = createPinia()
    pinia.use(piniaPersist)
    app.use(pinia)
}
export { useAppStore }
