<template>
  <div class="flex w-full">
    <div class="xs:w-5/6 w-full sm:w-3/5 border-x min-h-screen h-full">
      <div class="flex w-full justify-between items-center">
        <page-header name="Notification" />
        <div
          class="w-fit h-fit mr-4 px-2 py-1 cursor-pointer rounded-full hover:bg-slate-200"
        >
          <i class="fa-solid fa-gear"></i>
        </div>
      </div>
      <div class="flex border-b justify-between items-center">
        <p
          @click="changeAllActive()"
          class="cursor-pointer text-sm w-1/2 flex justify-center py-2 px-1 hover:bg-slate-100"
          :class="[allActive ? 'font-bold borders p-active' : 'font-semibold ']"
        >
          All
        </p>
        <p
          @click="changeMentionActive()"
          class="cursor-pointer text-sm w-1/2 flex justify-center py-2 px-1 hover:bg-slate-100"
          :class="[
            mentionsActive ? 'font-bold borders p-active' : 'font-semibold',
          ]"
        >
          Mentions
        </p>
      </div>
      <!-- tweets -->
      <div v-if="allActive" class=""></div>
      <div v-else class="border-b">
        <img src="../../assets/notification.png" alt="" />
        <div class="px-8 py-4">
          <p class="text-2xl font-bold xl:w-5/6">
            Control which conversations you are mentioned in
          </p>
          <p class="text-sm font-normal xl:w-5/6">
            Use the action menu — those three little dots on a Tweet — to untag
            yourself and leave a conversation.
          </p>
        </div>
      </div>
      <div v-if="mentionsActive">
        <div class="" v-for="(item, index) in tweets" :key="index">
          <div
            class="px-4 py-2 flex w-full hover:bg-slate-100 cursor-pointer"
            v-if="item.reply == true"
          >
            <div
              class="justify-center items-center flex img w-20 xs:h-10  h-8 rounded-full bg-dim-900 mr-2"
            >
              <img class="relative" :src="item.img" alt="" />
            </div>
            <div>
              <p class="text-xs font-semibold">{{ item.about }}</p>
              <div class="flex justify-between w-full items-center">
                <p class="text-sm">
                  <span class="font-semibold">{{ item.name }} </span> @{{
                    item.nickname
                  }}
                  - {{ item.time }}
                </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <p class="text-sm">
                Replying to
                <span class="cursor-pointer text-dim-500 hover:text-underline"
                  >@username</span
                >
              </p>
              <p class="text-sm">{{ item.tweet }}</p>
              <div class="flex justify-between w-5/6 pt-2">
                <div class="flex items-center cursor-pointer">
                  <i class="far fa-comment"></i>
                  <span class="ml-1">13</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="fa-regular fa-retweet"></i>
                  <span class="ml-1">{{ item.retweets }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="far fa-solid fa-arrow-down"></i>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="far fa-heart"></i>
                  <span class="ml-1">{{ item.likes }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="far  fa-arrow-up-from-bracket"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="p-4" v-for="(item, index) in tweets" :key="index">
          <div class="flex justify-between w-full items-center">
            <!-- img -->
            <div class="flex items-center">
              <i class="fa-regular fa-heart"></i>
              <div
                class="justify-center items-center flex img w-8  h-8 rounded-full bg-dim-500 ml-2"
              >
                <img class="relative" src="" alt="" />
              </div>
            </div>
            <!-- icon -->
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <p class="font-semibold text-sm">{{ item.name }}</p>
          <p class="text-sm">{{item.tweet}}</p>
        </div>
      </div>
    </div>
    <!-- Right Sidebar -->
    <div class="sm:w-3/5 xs:w-1/6 w-0 hidden sm:block">
      <SidebarRight :gray="true" />
      <who-to-follow  title="Who to follow"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tweets = ref([
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're ins",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: false,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: false,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: false,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
  {
    name: "daniel Daniel",
    tweet:
      "Lil🕸️Adonise. I wonder why programmers in movies don't encounter any bugs and errors.All they need is 2minutes and they're in",
    img: "",
    nickname: "Dans",
    time: "02 sept 2022",
    reply: true,
  },
]);

const allActive = ref(false);
const mentionsActive = ref(true);
function changeAllActive() {
  allActive.value = true;
  mentionsActive.value = false;
}
function changeMentionActive() {
  allActive.value = false;
  mentionsActive.value = true;
}
</script>

<style scoped>
.p-active {
  position: relative;
}
.p-active::after {
  /* border-bottom: 3px solid #1d9bf0; */
  content: "";
  position: absolute;
  width: 15%;
  height: 2.5px;
  transition: 0.5s ease all;
  bottom: 0%;
  left: 42.5%;
  background: #1d9bf0;
}
</style>
