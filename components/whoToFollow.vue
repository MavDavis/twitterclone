<template>
     <div class="max-w-full   relative  rounded-lg p-4 m-4" :class="[white?'bg-white':' bg-slate-100 ']">
  <h1 class="font-bold text-lg mb-5 ">{{title}}</h1>

  <div class="flex w-full items-center flex-col">
    <div
      class="flex justify-between w-full items-center mb-3"
      v-for="(person, ind) in whoToFollow.slice(0,3)"
      :key="ind"
    >
    <div class="flex items-center">
        <div
        class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-900 mr-2"
      >
        <img class="relative" :src="person.img" alt="" />
      </div>
      <div class=" items-start flex flex-col">
        <p class="text-sm">{{person.name}}</p>
        <p class="text-sm">@{{person.nickname}}</p>
      </div>
    </div>
      <button
            class="flex items-center justify-center w-20 relative py-1 text-sm rounded-full my-1 hover:bg-dim-800 bg-dim-900 text-white"
          >
            Follow
          </button>
    </div>
</div>
<p class="flex cursor-pointer text-sm justify-start items-center text-dim-500">
    Show more
</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

 const props = defineProps(['title', 'white'])

const whoToFollow = ref([
  { name: "PulseNigeria", nickname: "pulseSportNG", img: "" },
  { name: "Jeyi Adole", nickname: "Jeyvers", img: "" },
  { name: "David Marvelous", nickname: "Mavdavis", img: "" },
  { name: "Emmanuel Emmanuel", nickname: "Manuel", img: "" },
  { name: "Wannandah Sunny", nickname: "DahDog", img: "" },
  { name: "Wisdom Emmanuel", nickname: "Wise", img: "" },
]);
</script>

<style></style>
