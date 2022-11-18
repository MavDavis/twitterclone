<template>
    <div :class="{ dark: darkMode }">
      <ModalTweet v-if="IWantToTweet"/>
  
      <div
        class="w-screen max-w-full h-full relative min-h-screen flex"
      >
        <!-- LeftSideBar -->
        <div class="lg:w-1/4 xxs:w-1/6 w-0 h-screen sticky top-0">
          <SidebarLeft/>
        </div>
        <!-- Main Content -->
        <div class="lg:w-3/4 xxs:w-5/6 w-full min-h-screen  h-full relative">
  <NuxtPage/>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 w-full h-fit py-2 bg-white xxs:hidden flex">
        <nav>
    <ul class="flex justify-between items-center w-screen relative">
      <li v-for="item,ind in links" :key="ind">
        <NuxtLink  class="flex items-center px-2  py-1 text-lg rounded-full my-1 hover:bg-slate-200"  :to="{name:item.params ? item.params :item.name}">
      <i :class="item.icon"></i>
    </NuxtLink>
      </li>
    </ul>
  </nav>
      </div>
      <div class="w-full fixed bottom-0 left-0 h-fit py-2 xs:bg-dim-500 bg-white flex  sm:pl-40 xs:pl-10 pl-4 justify-between" v-if="!loggedIn">
     <div class=" flex-col items-center xs:flex hidden">
      <h1 class="text-white text-sm xs:text-lg font-bold">
  Don’t miss what’s happening</h1>
  <p class="text-white xs:text-lg text-sm">People on Twitter are the first to know.
  </p>
     </div>
     <div class="flex items-center xs:justify-start justify-between w-full xs:w-1/3 sm:w-1/4">
      <button class="flex  xs:border items-center justify-center w-1/2 mr-2 relative py-1 text-lg font-bold rounded-full  hover:bg-dim-600 bg-dim-500 text-white ">
        <NuxtLink class="w-full" to="/Login">Login</NuxtLink>
      </button>
      <button class="flex xs:border-0 border-2  items-center justify-center w-1/2 relative mr-2 py-1 text-lg font-bold rounded-full hover:bg-slate-200 bg-white text-dim-900 ">
        <NuxtLink class="w-full" to="/Signup">Signup</NuxtLink>
      </button>
   
     </div>
      </div> 
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
import SidebarLeft from './components/sidebar/left.vue'
import ModalTweet from './components/modal/tweet.vue'
  
  const darkMode = ref(false);
  const loggedIn = ref(false)
  const IWantToTweet = ref(false)
  const links = ref([
  {icon:"fas  fa-house", name:'Home',params:'index'},
  {icon:'fa-solid fa-search', name:'Explore'},
  {icon:'fa-regular fa-bell', name:'Notification'},
  {icon:'fa-regular fa-envelope', name:'Messages', params:'chat'},
  ])
  </script>
  <style>
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: all ease-in-out .6s;
  }
  .router-link-active{
  font-weight:bolder ;
  }
  
  </style>