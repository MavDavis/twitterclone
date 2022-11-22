<template>
<div class="w-full">
  <register :logo="true" @closeModal="closeModal">
    <div class="flex justify-start px-4 pl-16 w-full">
      <div class="w-fit"><page-header name="Create your account" /></div>
    </div>
    <div class="w-full relative px-4 flex flex-col items-center">
      <input
        type="text"
        v-model="text"
        placeholder="Name"
        disabled
        class="block p-4 xs:w-3/4 w-full bg-white text-sm text-slate-400 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
      /><input
        type="text"
        v-model="email"
        placeholder="Email"
        disabled
        class="block p-4 bg-white xs:w-3/4 w-full text-sm text-slate-400 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
      /><input
        :type="type"
        v-model="email"
        placeholder="Password"
        disabled
        class="block p-4 bg-white xs:w-3/4 w-full text-sm text-slate-400 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
      />
    </div>
    <div class="w-full px-4">
<h4 class="font-semibold text-xl">Date of birth</h4>  
    <p class="text-sm w-3/4">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
  <select/>  
  </div>
  </register>
</div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};
</script>

<style></style>
