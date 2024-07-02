<template>
  <PageWrapper title="上传组件示例">
    <Upload1 />
    <Upload2 />
    <Upload3 />
    <Upload4 />
  </PageWrapper>
</template>
<script lang="ts" setup>
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()
  console.log(t("common.okText",'t("common.okText"'))
  import Upload1 from './Upload1.vue';
  import Upload2 from './Upload2.vue';
  import Upload3 from './Upload3.vue';
  import Upload4 from './Upload4.vue';
  import { PageWrapper } from '@/components/Page';
</script>
