import { PluginOption } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { autoImport, autoComponent } from './plugins/autoComponent'

// eslint-disable-next-line no-unused-vars
export function pluginsConfig(isBuild: boolean) {
    const plugins: PluginOption[] = [vue(), vueJsx(), Unocss()]
    plugins.push(autoImport())
    plugins.push(autoComponent())
    return plugins
}
