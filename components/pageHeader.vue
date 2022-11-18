<template>
    <div
        class="sticky h-fit top-0 left-0 z-40 bg-white w-full px-4 flex flex-col justify-start" :class="[py?'py-0':'py-4']"
      >
        <p class="text-xl font-bold ">{{name}}</p>
        <p class="text-xs " v-if="nomOfTweets">{{nomOfTweets}} tweets</p>
      </div>
</template>

<script setup>
 const props = defineProps(['name', 'py', 'nomOfTweets'])

</script>

<style>

</style>