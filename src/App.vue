<script setup lang="ts">
import { useChangeTheme } from '@/hooks/theme/useChangeTheme'
import { useTheme } from '@/hooks/theme/useTheme'
import { CSelect } from '@/components'
defineOptions({ name: 'Root' })
useTheme()
const appStore = useAppStore()

const { changeTheme } = useChangeTheme()
const onChangeTheme = (color: string) => {
    changeTheme(color)
}

const value = ref([])
const options = [
    {
        value: 'Option1',
        name: 'Option1'
    },
    {
        value: 'Option2',
        name: 'Option2'
    },
    {
        value: 'Option3',
        name: 'Option3'
    },
    {
        value: 'Option4',
        name: 'Option4'
    },
    {
        value: 'Option5',
        name: 'Option5'
    }
]
</script>
<template>
    <el-config-provider size="default">
        <el-button type="primary" @click="appStore.themeMode = 'dark'">暗黑模式</el-button>
        <el-button type="primary" @click="appStore.themeMode = 'light'">默认</el-button>
        <el-button type="primary" @click="onChangeTheme('#009688')">淡绿</el-button>
        <el-button type="primary" @click="onChangeTheme('#409eff')">默认主题</el-button>
    </el-config-provider>
    <br />
    <br />
    <CSelect
        v-model="value"
        :data-source="options"
        display-label="name"
        multiple
        class="m-2 w-300px"
        placeholder="Select"
    >
    </CSelect>
    <br />
    <br />
    <!-- <el-select v-model="value" multiple class="m-2" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.name"
            :value="item.value"
        />
    </el-select> -->
</template>
