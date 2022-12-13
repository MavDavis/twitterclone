<template>
  <div :class="{ dark: darkMode }" @click="toggleSidebar()">
<div v-if="!loading"  >
  <sidebarSide v-if="$store.state.sidebarSide" />

    <ModalTweet v-if="IWantToTweet" />
    <div class="w-screen max-w-full h-full relative min-h-screen flex">
      <!-- LeftSideBar -->
      <div class="lg:w-1/4 xxs:w-1/6 w-0 h-screen sticky top-0">
        <SidebarLeft />
      </div>
      <!-- Main Content -->
      <div class="lg:w-3/4 xxs:w-5/6 w-full min-h-screen h-full relative">
        <slot></slot>
        <div class="bg-dim-500 w-12 h-12 flex items-center justify-center p-2 rounded-full fixed bottom-20 right-4 xxs:hidden" v-if="$store.state.loggedIn"
        @click="$store.commit('toggleIwantToTweet')"

>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 w-full h-fit py-2 bg-white xxs:hidden flex"
    >
      <nav>
        <ul class="flex justify-between items-center w-screen relative">
          <li v-for="(item, ind) in links" :key="ind">
            <NuxtLink
              class="flex items-center px-2 py-1 text-lg rounded-full my-1 hover:bg-slate-200"
              :to="{ name: item.params ? item.params : item.name }"
            >
              <i :class="item.icon"></i>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="w-full fixed bottom-0 left-0 h-fit py-2 xs:bg-dim-500 bg-white flex sm:pl-40 xs:pl-10 pl-4 justify-between"
      v-if="!$store.state.loggedIn"

    >
      <div class="flex-col items-center xs:flex hidden">
        <h1 class="text-white text-sm xs:text-lg font-bold">
          Don’t miss what’s happening
        </h1>
        <p class="text-white xs:text-lg text-sm">
          People on Twitter are the first to know.
        </p>
      </div>
      <div
        class="flex items-center xs:justify-start justify-between w-full xs:w-1/3 sm:w-1/4"
      >
        <button
          class="flex xs:border items-center justify-center w-1/2 mr-2 relative py-1 text-lg font-bold rounded-full hover:bg-dim-600 bg-dim-500 text-white"
        >
          <NuxtLink class="w-full" to="/Login">Login</NuxtLink>
        </button>
        <button
          class="flex xs:border-0 border-2 items-center justify-center w-1/2 relative mr-2 py-1 text-lg font-bold rounded-full hover:bg-slate-200 bg-white text-dim-900"
        >
          <NuxtLink class="w-full" to="/Signup">Signup</NuxtLink>
        </button>
      </div>
    </div>
</div>
<Loading v-else/>

  </div>
</template>
<script>
import { firebaseAuth } from "../firebase/index";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SidebarSide from "../components/sidebar/side.vue";
import SidebarLeft from "../components/sidebar/left.vue";
import ModalTweet from "../components/modal/tweet.vue";
import PagesIndex from "../components/pages/index.vue";
export default {
  data() {
    return {
      darkMode: false,
      loggedIn: false,
      loading:true,
      IWantToTweet: false,
      links: [
        { icon: "fal  fa-house", name: "Home", params: "index" },
        { icon: "fal fa-search", name: "Explore" },
        { icon: "fal fa-bell", name: "Notification" },
        { icon: "fal fa-envelope", name: "Messages", params: "chat" },
      ],
    };
  },
  mounted() {
    this.checkRoute();
    onAuthStateChanged(firebaseAuth, (user) => {
      // this.$store.commit('updateUser', user);
      if (user) {
        this.$store.commit("userDetail", user);
      } else {
        console.log("please log in");
      }
    });
    
    this.loading = false;

  },
  methods: {
    toggleSidebar(){
      if(this.$store.state.sidebarSide == true){
// this.$store.commit('toggleSidebar')
      }else{
        return
      }
    },
    checkRoute() {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user === undefined || user === null) {
          if (
            this.$route.name.toLowerCase() != "login" &&
            this.$route.name.toLowerCase() != "forgotPassword" &&
            this.$route.name.toLowerCase() != "signup"
          ) {
            this.$router.push("/Explore");
          } else {
            return
          }
        }else{
          if (
            this.$route.name.toLowerCase() === "login" ||
            this.$route.name.toLowerCase() === "forgotPassword" ||
            this.$route.name.toLowerCase() === "signup"
          ) {
            this.$router.push("/");
          } else {
            return
          }
        }
      });
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: all ease-in-out 0.6s;
}
.router-link-active {
  font-weight: bolder;
}
svg{
  fill:white;
}
</style>
