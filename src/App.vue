<script setup lang="ts">
import { useChangeTheme } from '@/hooks/theme/useChangeTheme'
import { useTheme } from '@/hooks/theme/useTheme'

useTheme()
const appStore = useAppStore()

const { changeTheme } = useChangeTheme()
const onChangeTheme = (color: string) => {
    changeTheme(color)
}
</script>
<template>
    <el-config-provider>
        <el-button type="primary" @click="appStore.themeMode = 'dark'">暗黑模式</el-button>
        <el-button type="primary" @click="appStore.themeMode = 'light'">默认</el-button>

        <el-button type="primary" @click="onChangeTheme('#009688')">淡绿</el-button>
        <el-button type="primary" @click="onChangeTheme('#409eff')">默认主题</el-button>
    </el-config-provider>
</template>
