<template>
 <div class=" ">

  <div class="w-full h-fit relative py-5 px-4">
    <!-- searchbar -->
 <searchbar placeholder="Search twitter"/>
    <!-- trends -->
    <div class="w-full rounded-lg  mt-5" :class="[gray?'bg-slate-100' :'bg-white']">
     <niger-trend/>
    </div>
  </div>
 </div>
</template>

<script setup>
 const props = defineProps(['gray'])
</script>
<style></style>
