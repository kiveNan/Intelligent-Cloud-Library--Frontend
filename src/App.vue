<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import {useLoginUserStore} from "@/stores/useLoginUserStore";
// 全局权限校验做过处理，没必要重复处理
// const loginUserStore = useLoginUserStore()
// loginUserStore.fetchLoginUser()


</script>

<style>
#app {
}
</style>
