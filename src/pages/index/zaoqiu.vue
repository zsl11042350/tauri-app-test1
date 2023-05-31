<template>
  <div class="container">
    <h1 text="red-500" font="bold">Welcome to Tauri!</h1>

    <div flex items-center justify-center w-full>
      <a href="https://vitejs.dev" target="_blank" class="a_style">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank" class="a_style">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="a_style">
        <img :src="getAssetsFile('vue.svg')" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <p py="4">Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p py="4">
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank"
        >Tauri</a
      >
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank"
        >rust-analyzer</a
      >
    </p>

    <Greet />
  </div>
</template>

<script setup>
import Greet from "~/components/Greet.vue";
import { getAssetsFile } from "~/composables";
</script>

<style lang="scss" scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}
</style>






