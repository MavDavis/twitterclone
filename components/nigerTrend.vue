<template>
<div>
   <div v-for="(trend, ind) in trends.nigeriaTrend" :key="ind">
        <div class="p-3">
          <h1 class="font-bold text-xl mb-5">Nigeria Trends</h1>
          <h3 class="text-sm font-semibold">{{ trend.name }}</h3>
          <p class="text-sm leading-normal">{{ trend.p }}</p>
          <p class="text-sm mt-1" v-if="trend.span">{{ trend.span }}</p>
        </div>
        <!-- trending post -->
        <div v-for="(postTrend, ind) in trend.posts" :key="ind">
          <div class="w-full hover:bg-slate-200 mb-2 p-3" v-if="postTrend.img">
            <p class="text-sm">{{ postTrend.id }}. {{ postTrend.title }} - Trending</p>
            <div
              class="
                border-2
                hover:border-white
                mt-1
                flex
                items-center
                rounded-lg
            h-28
                w-full
                relative
              "
            >
              <div class="w-3/4  p-4">
                <p>{{ postTrend.img.title }}</p>
                <p>{{ postTrend.img.name }}</p>
              </div>
              <div class="w-1/4 relative h-full">
                <img
                  class="w-full relative h-full"
                  src="../assets/jean-woloszczyk-CcPE98IQJGo-unsplash.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div class="w-full hover:bg-slate-200 mb-2 p-3" v-else>
            <p class="text-sm">
              {{ postTrend.id }}. {{ postTrend.title }} - Trending
            </p>
            <p class="text-sm font-semibold">{{ postTrend.desc }}</p>
            <p class="text-sm">{{ postTrend.tweets }}</p>
          </div>
        </div>
      </div>
      <p
        class="
          px-4
          pb-4
          cursor-pointer
          flex
          justify-start
          items-center
          text-sm
          text-dim-500
        "
      >
        Show more
      </p></div>
</template>

<script setup>
import { ref } from "vue";


const trends = ref({
  nigeriaTrend: [
    {
      name: "#shallWe",
      p: "It’s our favourite day of the year, also known as Gordon’s & Tonic Day",
      span: "Promoted by Gordon's Gin Nigeria",
      posts: [
        {
          title: "Football",
          desc: "Rashford",
          tweets: "30.5k",
          id: 1,
          img: {
            title: "Premier League",
            name: "Man u vs Tottenham",
            src: "",
          },
        },
        { title: "Football", desc: "Haverts", tweets: "28.5k", id: 2 },
        { title: "Football", desc: "Conte", tweets: "25.5k", id: 3 },
        { title: "Football", desc: "Spurs", tweets: "23.5k", id: 4 },
        {
          title: "Football",
          desc: "Rashford",
          tweets: "21k",
          id: 5,
          img: {
            title: "Champions League",
            name: "Chelsea vs Tottenham",
            src: "",
          },
        },
        { title: "Football", desc: "Pulisic", tweets: "19.5k", id: 6 },
        { title: "Football", desc: "Tottenham", tweets: "15.5k", id: 7 },
      ],
    },
  ],
});


</script>

<style>

</style>