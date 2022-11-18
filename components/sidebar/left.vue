<template>
  <div class=" px-5 w-1/12 lg:w-1/4  h-screen top-0 left-0 fixed py-5 xxs:block hidden">
  <logo/>
    <!-- nav-links -->
    <div class="w-full 
    //flexflex-colitems-end">
<nav>
  <ul class="flex flex-col justify-start items-start w-full relative">
    <li v-for="item,ind in links" :key="ind">
      <NuxtLink v-if="item.loggedIn"  class="flex items-center px-5 py-1 text-sm rounded-full my-1 hover:bg-slate-200"  :to="{name:item.params ? item.params :item.name}">
    <i :class="item.icon"></i>
      <span class="ml-3 lg:block hidden" >{{item.name}}</span>
  </NuxtLink>
    </li>
     <li class="cursor-pointer flex items-center text-sm px-5 py-1  rounded-full my-1 hover:bg-slate-200" >
      <Icon name="iconoir:more-horiz-circled-outline" />
      
    <div>
      <span class="ml-3 lg:block hidden">More</span>
    </div>
    </li>
    <button v-if="loggedIn" class="lg:flex hidden  items-center justify-center w-40 relative py-2 text-sm rounded-full my-1 hover:bg-dim-600 bg-dim-500 text-white ">Tweet</button>
  </ul>
</nav>
    </div>
    <div v-if="loggedIn" class="absolute bottom-0 mb-5 hover:bg-slate-300 rounded-full p-2 xs:pr-5 justify-start  items-center flex w-fit">
  <div class="justify-center  items-center flex img w-12 h-12 rounded-full bg-dim-500 xs:mr-2">
    <img class=" relative" src="" alt="">
  </div>
  <div class="lg:flex flex-col items-center hidden  ">
    <p class="text-sm font-semibold">Username</p>
    <p class="text-xs font-light">@nickname</p>
</div>
<div class="icon ml-8 hidden lg:block">
  <i class="fa-solid fa-ellipsis"></i>
</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
{icon:"fas  fa-house", name:'Home',params:'index'},
{icon:'fa-regular fa-hashtag', name:'Explore',loggedIn:true},
{icon:'fa-regular fa-bell', name:'Notification'},
{icon:'fa-regular fa-envelope', name:'Messages', params:'chat'},
{icon:'fa-regular fa-bookmark', name:'Bookmark'},
{icon:'fa-regular fa-rectangle-list', name:'List'},
{icon:'fa-regular fa-user', name:'Profile'},
// {icon:'', name:'More'},

])
const loggedIn = ref(false)
</script>

<style scoped>
/* @media(max-width:980px){
  .name
  {
    display: none;
  }
} */
</style>