<template>
  <div
    class="px-5 w-1/12 lg:w-1/4 h-screen top-0 left-0 fixed py-5 xxs:block hidden"
  >
    <logo />
    <!-- nav-links -->
    <div class="w-full //flexflex-colitems-end">
      <nav>
        <ul class="flex flex-col justify-start items-start w-full relative">
          <li v-for="(item, ind) in links" :key="ind" >
            <NuxtLink
              v-if="item.loggedIn"
              class="flex items-center px-5 py-1 text-sm rounded-full my-1 hover:bg-slate-200"
              :to="{ name: item.params ? item.params : item.name }"
            >
              <i :class="item.iconStart + item.icon"></i>
              <span class="ml-3 lg:block hidden">{{ item.name }}</span>
            </NuxtLink>
          </li>
          <li
            class="cursor-pointer flex items-center text-sm px-5 pl-4 py-1 rounded-full my-1 hover:bg-slate-200"
          >
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
            <div>
              <span class="ml-3 lg:block hidden">More</span>
            </div>
          </li>
          <button
          @click="$store.commit('toggleIwantToTweet')"
            v-if="$store.state.loggedIn"
            class="lg:flex hidden items-center justify-center w-40 relative py-2 text-sm rounded-full my-1 hover:bg-dim-600 bg-dim-500 text-white"
          >
            Tweet
          </button>
        </ul>
      </nav>
    </div>
    <div v-if="showLogoutModal" class="modal shadow-md rounded-xl px-6 py-11 absolute bottom-28 flex  mt-auto">
    <p @click="$store.commit('logout')" class="text-xl cursor-pointer">Logout out Username</p></div>
    <div
    @click="showLogoutModal = true"
      v-if="$store.state.loggedIn"
      class="absolute cursor-pointer bottom-0 mb-5 hover:bg-slate-300 rounded-full p-2 xs:pr-5 justify-start items-center flex w-fit"
    >
      <div
        class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-500 xs:mr-2"
      >
        <img v-if="$store.state.userProfile.profileImage.length" class="relative w-full h-full rounded-full" :src="$store.state.userProfile.profileImage" alt="" />
      </div>
      <div class="lg:flex flex-col items-center hidden">
        <p class="text-sm font-semibold">{{$store.state.userProfile.Fullname}}</p>
        <p class="text-xs font-light">@{{$store.state.userProfile.Username}}</p>
      </div>
      <div class="icon ml-8 hidden lg:block">
        <i class="fas fa-ellipsis"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseAuth } from "../../firebase/index";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      showLogoutModal:false,
      links: [
        { icon: "fal fa-house", iconStart:'', name: "Home", params: "index" },
        { icon: " fa-hashtag", iconStart:'fal', name: "Explore", loggedIn: true },
        { icon: " fa-bell", iconStart:'fal', name: "Notification" },
        { icon: " fa-envelope", iconStart:'fal', name: "Messages", params: "chat" },
        { icon: " fa-bookmark", iconStart:'fal', name: "Bookmark" },
        { icon: " fa-list", iconStart:'fal', name: "List" },
        { icon: " fa-user", iconStart:'fal', name: "Profile" },
      ],
    };
  },

  mounted() {
    this.links.map(item=>{
      if (item.name == this.$route.name){
        item.iconStart ='fas'
      }
     
      else{
        item.iconStart = 'fal'
      }})
      if(this.$route.name == '/'){
        this.links[0].icon = 'fas fa-house'
      }else if(this.$route.name == 'chat'){
        this.links[3].iconStart = 'fas'
        this.links[0].iconStart = ''

      }else{
        this.links[0].iconStart = ''

      }
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        this.links = this.links.map((item) =>
          item.loggedIn ? item.loggedIn = true : { ...item, loggedIn: true }
        );
      }
    });
  },
};
</script>

<style scoped lang="scss">
.modal{
width: 260px;
 min-height: 30px;
height:fit-content;
}
svg {
  --tw-text-opacity: 1;
  // fill: rgb(29 155 240);
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem;
  height: 18px;
  width: 18px;
  &:hover {
    background: rgb(179 233 225 / var(--tw-text-opacity));
    cursor: pointer;
  }
}
.nuxt-link-exact-active{
  font-weight: bolder;
}
</style>