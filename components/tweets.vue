<template>
  <section class="w-full h-full">
    <ul class="flex w-full flex-col">
      <li
        class="border-b w-full relative"
        v-for="(item, ind) in tweets"
        :key="ind"
      >
        <div class="flex w-full relative">
          <div class="img w-16 p-4">
            <div
              class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-100 mr-2"
            >
              <img class="relative" src="" alt="" />
            </div>
          </div>
          <div class="width">
            <div class="py-2" v-if="item.img == undefined">
              <p class="text-xs font-semibold">{{ item.about }}</p>
              <div class="flex justify-between w-full items-center">
                <p class="text-sm">
                  <span class="font-semibold">{{ item.name }} </span
                  >{{ item.nickname }} - 1hr
                </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <p class="text-sm">{{ item.tweets }}</p>
              <div class="flex justify-between w-5/6  pt-2">
                <div class="flex items-center cursor-pointer">
                  <i class="fa-regular fa-comment"></i>
                  <span class="ml-1">137</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="fa-regular fa-retweet"></i>
                  <span class="ml-1">{{ item.retweets }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="fa-regular fa-heart"></i>
                  <span class="ml-1">{{ item.likes }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="py-2" v-else>
              <p class="text-xs font-semibold">{{ item.about }}</p>
              <div class="flex justify-between w-full mb-1 items-center">
                <p class="text-sm">
                  <span class="font-semibold">{{ item.name }} </span
                  >{{ item.nickname }} - 1hr
                </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div class="xs:h-96  h-36 rounded-lg my-2 rborder w-full"><img src="" alt="" /></div>
              <p class="text-sm">{{ item.tweets }}</p>
              <div class="flex w-5/6 justify-between pt-2">
                <div class="flex items-center cursor-pointer">
                  <i class="fa-regular fa-comment"></i>
                  <span class="ml-1">137</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="fa-regular fa-retweet"></i>
                  <span class="ml-1">{{ item.retweets }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="fa-regular fa-heart"></i>
                  <span class="ml-1">{{ item.likes }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const tweets = ref([
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 2,
    likes: 7,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    img: "",

    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 6,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 8,
    img: "",
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    img: "",
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    nickname: "@Mavdaves",
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    img: "",
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
  {
    name: "David Mav",
    about: "Web development",
    retweets: 0,
    likes: 0,
    tweets: "Raise your✋ if you're learning JavaScript, React or Python?",
  },
]);
onMounted(() => {});
</script>

<style scoped>
.width {
  position: relative;
  width: calc(100% - 4rem);
  padding-right: 16px;
}
</style>
