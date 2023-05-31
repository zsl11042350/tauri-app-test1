<template>
  <div class="container">
    测试混磨-{{ device.name }}
  </div>
</template>

<script setup>
import { useDeviceStateStore } from "~/store/device-state";
const deivceStateStore = useDeviceStateStore();
const { device } = toRefs(deivceStateStore);
</script>

<style scoped>

</style>