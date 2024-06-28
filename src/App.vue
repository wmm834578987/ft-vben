<script lang="ts" setup>
import 'dayjs/locale/zh-cn'

import { App, ConfigProvider } from 'ant-design-vue'
import { storeToRefs } from 'pinia'

import { computed, onMounted } from 'vue'
import { AppProvider } from '@/components/Application'
import { useTitle } from '@/hooks/web/useTitle'
import { useLocale } from '@/locales/useLocale'
import { useAppStore } from '@/store/modules/app'
const { getAntdLocale } = useLocale()
const appStore = useAppStore()
const { themeConfig } = storeToRefs(appStore)
import { usePermissionStore } from '@/store/modules/permission'
const permissionStore = usePermissionStore();
import { useRouter } from 'vue-router';
const router = useRouter();
const componentSize = computed(() => appStore.getComponentSize)
// Listening to page changes and dynamically changing site titles
useTitle()
onMounted(async () => {
  const routeList = await permissionStore.buildRoutesAction()
  routeList.forEach((route) => {
    try {
      router.addRoute(route)
    }
    catch (e) { }
  })

})

</script>

<template>
  <ConfigProvider :locale="getAntdLocale" :theme="themeConfig" :component-size="componentSize">
    <App class="h-full w-full">
      <AppProvider>
        <RouterView />
      </AppProvider>
    </App>
  </ConfigProvider>
</template>
