<template>
  <div flex="~ col" class="home" relative="~">
    <div class="main-wrapper" flex="grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>

    <div
      class="bottom-navigation-bar"
      flex="~"
      justify="evenly"
      items="center"
      p="y-4 x-2"
      gap="2"
      w-full
      fixed
      bottom-0
    >
      <button
        :disabled="$route.path === item.to"
        v-for="(item, index) in MainMenu"
        :key="index"
        class="button__style"
        :class="{ route__active: $route.path === item.to }"
        @click="$router.push(item.to)"
      >
        {{ item.name }}
      </button>
    </div>

  </div>
</template>

<script setup>
import { MainMenu } from "~/configuration";

</script>

<style lang="scss" scoped>
.button__style {
  @apply border-3 h-8 text-center text-lg rounded-lg cursor-pointer text-dark-50 flex-grow;
  flex-basis: 0;
}
.route__active {
  @apply text-dark-50 bg-pink-50 font-bold;
}
</style>
