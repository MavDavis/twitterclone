<template>
  <div class="max-h-fit"   >
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
<!-- <script>
div2.addEventListener("scroll", () => {
    console.log('hy');
    var offset = element.getBoundingClientRect().top - element.offsetParent.getBoundingClientRect().top;
    const top = window.pageYOffset + window.innerHeight - offset;

    if (top === element.scrollHeight) {
        console.log("bottom");
    }
}, { passive: false })

</script> -->
<script>
export default{
  props:['gray'],
  }
 
</script>
<style></style>
