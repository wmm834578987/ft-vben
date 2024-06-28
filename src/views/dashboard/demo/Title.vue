<template>
     <div class="title">
      <div class="introduce">{{ props.name }}</div>
      <a-divider />
    </div>
</template>
  
<script setup lang='ts'>
  const props= defineProps(['name']);
</script>
  
<style lang="less" scoped>
  :deep(.ant-divider-horizontal) {
  margin: 15px 0
}

.title {
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
  .introduce {
    margin-left: 20px
  }
}
</style>