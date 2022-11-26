<template>
  <div class="flex w-full h-full relative">
    <div class="xs:w-5/6 w-full sm:w-3/5  border-x min-h-screen h-full relative">
      <!-- top -->
      <div class="my-4">
        <page-header :name="user.name" nomOfTweets="61" :py="true" />
      </div>
      <div class="relative w-full h-fit">
        <div class="h-40 w-full bg-slate-200 relative"></div>
        <div class="profile-pic bg-slate-200">
          <img src="" alt="" />
          <div class="hover"></div>
        </div>
        <button
          class="editProfile font-semibold text-xs hover:bg-slate-200 border rounded-full px-2 py-1"
        >
          Edit profile
        </button>
      </div>

      <!-- details -->
      <div class="relative top-20 px-4">
        <div class="my-4">
          <h3 class="text-xl font-bold">{{ user.name }}</h3>
          <p class="text-xs">@{{ user.name }}</p>
        </div>
        <!-- about -->
        <p class="text-sm">
          Software Engineer - JavaScript: Vue.js | Nuxt.js | Node.js
          http://github.com/MavDavis Music producer,
        </p>
        <div class="flex flex-wrap">
          <p class="flex items-center mr-2 text-sm cursor-pointer">
            <i class="fas fa-location-dot"></i><span>{{ user.location }}</span>
          </p>
          <p
            v-if="user.link"
            class="flex text-sm cursor-pointer items-center mr-2"
          >
            <i class="fa-solid fa-link"></i><span>{{ user.link }}</span>
          </p>
          <p class="flex items-center mr-2 text-sm cursor-pointer">
            <i class="fas fa-balloons">b</i><span>{{ user.birthday }}</span>
          </p>
          <p class="flex items-center mr-2 text-sm cursor-pointer">
            <i class="fas fa-location-dot"></i><span>{{ user.join }}</span>
          </p>
        </div>
        <div class="flex mt-2">
          <p class="mr-2 text-sm">{{ user.followers }} followers</p>
          <p class="text-sm">{{ user.following }} following</p>
        </div>
        <div class="w-full flex justify-between mt-2">
          <p @click="count()" class="hover:bg-slate-200 p-2 cursor-pointer">
            Tweets
          </p>
          <p class="hover:bg-slate-200 p-2 cursor-pointer">Tweets & replies</p>
          <p class="hover:bg-slate-200 p-2 cursor-pointer">Media</p>
          <p class="hover:bg-slate-200 p-2 cursor-pointer">Likes</p>
        </div>
        <tweets/>
      </div>
    </div>
    <!-- Right Sidebar -->
    <div class="sm:w-3/5 xs:w-1/6 w-0 hidden sm:block mb-4">
      <!-- show all the first eight tweets(images) in a grid view -->
      <div class="mx-4"><searchbar placeholder="search Twitter" />
      <who-to-follow title="You may like" /></div>
      <div class="bg-slate-100 rounded-lg mx-4">
        <niger-trend />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref({
  name: "User",
  location: "Abuja, Nigeria",
  link: "http://github.com/MavDavis",
  birthday: "03 March 2000",
  join: "03 September 2022",
  following: 65,
  followers: 19,
});
</script>

<style scoped>
.editProfile {
  position: absolute;
  bottom: -25%;
  right: 1rem;
}
.profile-pic {
  position: absolute;
  bottom: -50%;
  left: 1rem;
  border: 2px solid #fff;
  height: 9rem;
  width: 9rem;
  border-radius: 9999px;
  z-index: 9999px;
}
.hover {
  background: rgba(0, 0, 0, 0.1);
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.profile-pic:hover .hover {
  display: block;
  border-radius: 9999px;
  cursor: pointer;
}
</style>
