<template>
  <div class="w-full">
    <register>
      <div v-if="!nextClicked" class="w-full">
        <div class="flex justify-center">
          <div class="w-fit"><page-header name="Sign into twitter" /></div>
        </div>
        <div class="flex flex-col items-center w-full relative mx-auto px-8">
          <button
            class="w-full xs:w-3/5 flex justify-center border rounded-full p-1 text-sm col hover:border-dim-100"
          >
            <img class="h-5 mr-2" src="../../assets/google.jpg" alt="" /><span>
              Google sign in
            </span>
          </button>
          <button
            class="w-full xs:w-3/5 border rounded-full p-1 text-sm my-4 hover:bg-slate-100"
          >
            <i class="fa-brands fa-apple mr-2"></i>
            <span>Sign in with Apple</span>
          </button>
          or
          <input
            type="text"
            v-model="$store.state.userProfile.email"
            placeholder="Email or Username"
            class="block p-4 xs:w-3/5 w-full text-sm text-gray-900 border border-slate-200 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500"
          />
          <button
            @click="nextclick()"
            class="w-full xs:w-3/5 border rounded-full p-1 text-lg my-4 py-2 text-white bg-dim-900"
          >
            Next
          </button>
          <NuxtLink
            to="/forgotPassword"
            class="w-full xs:w-3/5 border rounded-full p-1 text-sm flex justify-center hover:bg-slate-100"
          >
            Forgot Password
          </NuxtLink>
          <p class="relative mt-8">
            Don't have an account?
            <NuxtLink class="text-dim-500 font-semibold" to="/Signup"
              >Signup</NuxtLink
            >
          </p>
        </div>
      </div>
      <div
        v-else
        class="w-full mx-auto flex flex-col items-center h-full relative"
      >
        <p
          v-if="$store.state.error"
          class="text-red-300 flex w-full item-center text-lg"
        >
          {{ $store.state.errMssg }}
        </p>

        <div class="w-fit"><page-header name="Enter your password" /></div>

        <input
          type="text"
          v-model="$store.state.userProfile.email"
          placeholder="Email or Username"
          disabled
          class="block p-4 xs:w-3/4 w-full bg-slate-100 text-sm text-slate-400 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
        /><input
          :type="type"
          v-model="$store.state.userProfile.password"
          placeholder="Password"
          class="block p-4 xs:w-3/4 w-full text-sm text-gray-900 border border-slate-200 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500"
        />

        <NuxtLink
          to="/forgotPassword"
          class="w-full flex justify-start pl-20 text-dim-500 cursor-pointer"
          >forgot password?</NuxtLink
        >
        <div class="mt-auto w-full relative flex flex-col items-center">
          <button
            @click="$store.commit('login')"
            class="w-full xs:w-3/4 border rounded-full text-lg p-3"
            :class="[
              $store.state.userProfile.password.length > 0
                ? 'bg-dim-900 text-white'
                : 'bg-slate-300',
            ]"
            :disabled="
              $store.state.userProfile.password.length < 0 ? true : false
            "
          >
            Log in
          </button>
          <p class="relative my-8">
            Don't have an account?
            <NuxtLink class="text-dim-500 font-semibold" to="/Signup"
              >Signup</NuxtLink
            >
          </p>
        </div>
      </div>
    </register>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "password",
      nextClicked: false,
    };
  },
  methods: {
    nextclick() {
      if (this.$store.state.userProfile.email != "") {
        this.nextClicked = true;
      }
    },
  },
};
</script>

<style scoped>
.col:hover {
  background: rgb(248, 255, 253);
}
</style>
