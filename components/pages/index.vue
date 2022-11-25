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
import { firebaseAuth } from "../../firebase/index";
    import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {

  mounted() {
    onAuthStateChanged(firebaseAuth, (user) => {
      // this.$store.commit('updateUser', user);
      if(user){
        this.$store.commit('userDetail', user)
      }else{
        console.log('please log in');
this.$router.push('/Explore')
      }
  })
  

}

}
</script>
