<template>
  <div class="max-h-fit" ref="div" >
    <div class="w-full h-fit relative py-5 px-4">
      <!-- searchbar -->
      <searchbar placeholder="Search twitter" />
      <!-- trends -->
      <div
        class="w-full rounded-lg mt-5"
        :class="[gray ? 'bg-slate-100' : 'bg-white']"
      >
        <niger-trend />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const div = ref(null)
const props = defineProps(['gray'])


let div2 = (div.value);
// div2.addEventListener("scroll", () => {
//     var offset = element.getBoundingClientRect().top - element.offsetParent.getBoundingClientRect().top;
//     const top = window.pageYOffset + window.innerHeight - offset;

//     if (top === element.scrollHeight) {
//         console.log("bottom");
//     }
// }, { passive: false });

</script>
<style></style>
