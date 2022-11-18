<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg flex justify-center items-center z-50">
    <!-- modal -->
    <div class="h-72 bg-white w-2/5 rounded-lg overflow-y-scroll">
        <div class="flex justify-start items-center p-4">
            <i class="fas fa-times text-xl" @click="IWantToTweet = false"></i>
        </div>
        <div class="flex items-center px-4">
            <div class="justify-center  items-center flex img w-12 h-12 rounded-full bg-dim-500 mr-2">
    <img class=" relative" src="" alt="">
  </div>
  <div class="border rounded-full  px-2 flex justify-center items-center">
    <span class="text-sm text-dim-500">Everyone</span>
    <i @click="toggleTweetAudience()" class="fas fa-chevron-down text-sm text-dim-500 ml-2 cursor-pointer"></i>
  </div>   
</div>
<div class="p-4 ml-12">
    <textarea class="w-full focus:outline-none
            active:outline-none active:border-none
            focus:ring-0 focus:ring-dim-100 " rows="4" id="" placeholder="What's happening?"></textarea>
            <div class="border"></div>
            <div class="w-full py-2 flex justify-start items-center">
            <i
              class="fas fa-image cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100"
            ></i>
            <i
              class="fa-solid fa-note-sticky mx-1
               text-dim-500 p-1 rounded-full cursor-pointer hover:bg-dim-100"
            ></i>
            <i
              class="fa-solid fa-list cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100 "
            ></i>
         
            <i
              class="fa-regular fa-calendar cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100 mx-1"
            ></i>
            <i
              class="fa-solid fa-face-smile cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100"
            ></i>
            <i
              class="fa-solid fa-location-dot cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100 ml-1"
            ></i>
          </div>
</div>
</div>
  </div>
</template>

<script setup>
const toggleTweetAudience = ()=>{

}
</script>

<style scoped>
.bg{
background: rgba(0,0,0,0.5);
}
.z-inc{
z-index: 9999rem;
}
</style>