<template>
  <div class="w-full h-full relative">
    <div class="flex w-full" v-if="$store.state.loggedIn">
      <div class="xs:w-5/6 w-full sm:w-3/5 border-x min-h-screen h-full">
        <home-main />
      </div>
      <!-- Right Sidebar -->
      <div class="sm:w-2/5 xs:w-1/6 w-0 hidden sm:block">
        <SidebarRight :gray="true" />
        <who-to-follow title="Who to follow" />
      </div>
    </div>
    <div v-else class="w-full h-full relative"><loading/></div>
  </div>
</template>

<script>
export default{
  data(){
    return{
    }
  },
    mounted(){
      if (this.$store.state.loggedIn == false) {
this.$router.push("/Explore");
    }
  
}}

</script>

<style></style>
