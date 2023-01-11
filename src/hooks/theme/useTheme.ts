import { useAppStore } from '@/store'

/** 主题模式切换 */
export function useTheme() {
    const appStore = useAppStore()

    const changeTheme = () => {
        if (appStore.themeMode === 'dark') {
            document.documentElement.className = appStore.themeMode
        } else {
            document.documentElement.className = ''
        }
    }

    watch(
        () => appStore.themeMode,
        () => {
            changeTheme()
        },
        { immediate: true }
    )
}
