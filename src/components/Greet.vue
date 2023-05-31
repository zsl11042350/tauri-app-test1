<template>
  <div class="greet" mt="5">
    <div flex items-center justify-center mt="4">
      <el-input v-model="name" placeholder="Enter a name..."></el-input>
      <el-button type="primary" plain ml="2" @click="greet">提交</el-button>
    </div>
    
    <p text="green-500" mt="4">{{ greetMsg }}</p>
    <div text="center base blue-300/80" mt="4">{{ time }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import dayjs from "dayjs";

const greetMsg = ref("");
const name = ref("");

const greet = useDebounceFn(async ()=>{
  console.log("123")
  greetMsg.value = await invoke("greet", { name: name.value });
}, 1000)

const time = ref(dayjs().format(`YYYY年MM月DD日 dddd HH点mm分ss秒`));
const getRefreshTime = function () {
  time.value = dayjs().format(`YYYY年MM月DD日 dddd HH点mm分ss秒`);
};
const timer = setInterval(getRefreshTime, 1000);
onBeforeUnmount(() => {
  clearInterval(timer);
});

</script>

<style lang="scss" scoped>
.greet {
  :deep() {
    .el-input {
      width: 220px;
    }
  }
}
</style>
