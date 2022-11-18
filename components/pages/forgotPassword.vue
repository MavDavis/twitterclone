<template>
  <register>
    <div class="h-full relative w-full flex flex-col items-center  px-4">
      <div class="flex justify-center">
        <div class="w-fit">
          <page-header
            name="
Find your Twitter account"
          />
        </div>
      </div>
      <input
        type="text"
        v-model="email"
        placeholder="Email or Username"
        class="block p-4 xs:w-3/4 w-full text-sm text-gray-900 border border-slate-200 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500"
      />
      <div class="mt-auto mb-8 w-full relative flex flex-col items-center">
        <button
          class="w-full xs:w-3/4 border rounded-full text-lg p-3"
          :class="[email.length > 0 ? 'bg-dim-900 text-white' : 'bg-slate-300']"
          :disabled="email.length < 0 ? true : false"
        >
     Search
        </button>
      </div>
    </div>
  </register>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
</script>

<style></style>
