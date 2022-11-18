<template>
     <div class="search-bar flex justify-center items-center w-full">
      <div class="relative w-full">
        <div
          class="
            flex
            absolute
            inset-y-0
            left-0
            items-center
            pl-3
            pointer-events-none
            form-pp
          "
        >
          <i class="fas fa-search text-gray-700"></i>
        </div>
        <input
          type="search"
          id="default-search"
          class="
            block
            p-4
            pl-10
            w-full
            text-sm text-gray-900
            rounded-full
            focus:outline-none
            active:outline-none active:border-dim-100
            focus:ring-1 focus:ring-dim-100
            bg-slate-100
          "
          :placeholder=placeholder
          required
        />
      </div>
    </div>
</template>

<script setup>
 const props = defineProps(['placeholder'])

</script>

<style>

</style>