<template>
  <transition
    name="mobile-nav"
    class="z-50 bg-white w-fit h-full fixed"
    v-if="$store.state.loggedIn"
  >
    <div
      class="mobileNav bg-white z-50 shadow-md h-full flex flex-col left-0 top-0 fixed xxs:hidden"
    >
      <div class="w-full flex justify-between items-center py-4 px-4">
        <p class="font-semibold text-lg">Account Info</p>
        <i
          class="fas fa-times text-2xl font-semibold"
          @click="$store.commit('toggleSidebar')"
        ></i>
      </div>
      <div class="w-full flex justify-between items-center py-4 px-4">
        <div @click="twoMethods">
          <div
            class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-500"
          >
            <img class="relative" src="" alt="" />
          </div>
        </div>
        <div
          class="border rounded-full w-8 h-8 flex items-center justify-center"
        >
          <i class="fas fa-plus text-lg"></i>
        </div>
      </div>

      <div class="w-full flex flex-col items-start py-4 px-4">
        <div @click="twoMethods()">
          <p class="text-sm font-semibold">Username</p>
          <p class="text-xs font-light">@nickname</p>
          <div class="mt-4 flex items-center justify-between">
            <p class="text-xs mr-4">
              <span class="font-semibold text-lg">0</span> follower
            </p>
            <p class="text-xs">
              <span class="font-semibold text-lg">0</span> following
            </p>
          </div>
        </div>
      </div>
      <nav class="px-4">
        <ul class="flex flex-col justify-start items-start w-full relative">
          <li
            v-for="(item, ind) in links"
            :key="ind"
            class="my-3 w-full"
            @click="item.methods()"
          >
            <div
              class="flex items-center py-1 text-lg rounded-full font-bold hover:bg-slate-200"
            >
              <i :class="item.icon"></i>
              <span class="ml-3">{{ item.name }}</span>
            </div>
          </li>
        </ul>
      </nav>
      <div class="border w-full"></div>
      <div class="mt-auto flex justify-start items-center p-4">
        <p
          @click="$store.commit('logout', 'toggleSidebar')"
          class="text-2xl font-semibold cursor-pointer"
        >
          Logout
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    console.log("hy");
  },
  data() {
    return {
      links: [
        { icon: "fa-regular fa-user", name: "Profile", methods: "twoMethods" },
        {
          icon: "fa-regular fa-bookmark",
          name: "Bookmark",
          methods: "twoMethods1",
        },
        {
          icon: "fa-regular fa-rectangle-list",
          name: "List",
          methods: "twoMethods2",
        },
      ],
    };
  },
  methods: {
    twoMethods() {
      this.$store.commit("toggleSidebar");
      this.$router.push("/profile");
    },
    twoMethods1() {
      this.$store.commit("toggleSidebar");
      this.$router.push("/Bookmark");
    },
    twoMethods2() {
      this.$store.commit("toggleSidebar");
      this.$router.push("/List");
    },
  },
};
</script>

<style lang="scss" scoped>
.mobileNav {
  width: 250px;
  overflow-x: hidden;
}
* {
  transition: all 1s ease;
}
.mobile-nav-enter {
  transform: translateX(100px);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
