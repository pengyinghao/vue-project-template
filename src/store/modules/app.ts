import { defineStore } from 'pinia'

interface AppStore {
    /** 主题模式 */
    themeMode: 'dark' | 'light'
    /** 主题颜色 */
    theme: string
}

export default defineStore({
    id: 'app',
    state: (): AppStore => ({
        themeMode: 'dark',
        theme: '#409eff'
    }),
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'app',
                storage: localStorage
            }
        ]
    }
})
