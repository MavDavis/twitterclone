<template>
    <div
        class="sticky h-fit top-0 left-0 z-40 bg-white w-full px-4 flex flex-col justify-start" :class="[py?'py-0':'py-4']"
      >
<div class="flex justify-center items-center w-fit">
  <div  @click="$store.commit('toggleSidebar')" v-if="$store.state.loggedIn" class="justify-center  items-center flex img w-12 h-12 rounded-full bg-dim-500 xxs:hidden mr-2">
    <img class=" relative" src="" alt="">
  </div>
  <p class="text-xl font-bold ">{{name}}</p>

</div>
      <p class="text-xs " v-if="nomOfTweets">{{nomOfTweets}} tweets</p>
      </div>
</template>

<script setup>
 const props = defineProps(['name', 'py', 'nomOfTweets'])

</script>

<style>

</style>