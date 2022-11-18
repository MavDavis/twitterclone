<template>
  <div class="flex w-full">
    <div class="xs:w-5/6 w-full sm:w-3/5  border-x min-h-screen h-full ">
      <div
        class="sticky h-fit top-0 left-0 z-40 bg-white w-full px-4 flex flex-col justify-start"
        :class="[py ? 'py-0' : 'py-4']"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink class="" :to="{ name: 'Profile' }">
              <i class="fas fa-arrow-left mr-4"></i
            ></NuxtLink>

            <div>
              <p class="text-lg font-bold">Lists</p>
              <p class="text-xs">@mavdaves</p>
            </div>
          </div>
          <div class="px-2 py-1 cursor-pointer hover:bg-slate-200 rounded-full">
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
      <p class=" px-4 text-lg font-bold">Pinned Lists</p>
      <p class="text-sm mt-3 flex px-8">Nothing to see here yet — pin your favorite Lists to access them quickly.
</p>
<div class="border-b pb-8"></div>
      <who-to-follow title="Discover new Lists" :white="white" />
      <div class="border-b pb-2"></div>
      <p class=" px-4 text-lg font-bold">Your Lists</p>
      <p class="text-sm mt-3 flex px-8">You haven't created or followed any Lists. When you do, they'll show up here.

</p>

    </div>
    <!-- Right Sidebar -->
    <div class="sm:w-3/5 xs:w-1/6 w-0 hidden sm:block">
      <SidebarRight :gray="true" />
      <who-to-follow title="Who to follow" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const white = ref(true);
</script>

<style></style>
