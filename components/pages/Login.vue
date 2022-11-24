<template>
  <div class="w-full">
    <register>
      <div v-if="!nextClicked" class="w-full ">
        <p class="text-lg flex justify-center px-4 text-red-300" v-if="error">{{errorMsg}}</p>

        <div class="flex justify-center">
          <div class="w-fit"><page-header name="Sign into twitter" /></div>
        </div>
        <div class="flex flex-col items-center w-full relative mx-auto px-8">
          <button
          @click="$store.commit('googleSignup')"

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
        class="w-full mx-auto flex flex-col items-center h-full relative px-8"
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
        />
        <div class="w-full flex item-center justify-center relative">
          <input type="checkbox" @click="togglePassword()" class="absolute top-1/3 right-14 xs:right-28 z-50">
          <input
          :type="type"
          v-model="$store.state.userProfile.password"
          placeholder="Password"
          class="block p-4 xs:w-3/4 w-full text-sm text-gray-900 border border-slate-200 rounded-lg focus:outline-none active:outline-none relative active:border-dim-500 focus:ring-1 focus:ring-dim-500"
        />
        </div>

        <NuxtLink
          to="/forgotPassword"
          class="w-full flex justify-start mt-4 xs:pl-20 text-dim-500 cursor-pointer"
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
    <div  v-if="$store.state.loading"><Loading/></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "password",
      nextClicked: false,
      error:false,
      errorMsg:''
    };
  },
  methods: {
    nextclick() {
      if (this.$store.state.userProfile.email != "") {
        var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(this.$store.state.userProfile.email )) {
        this.nextClicked = true;
        console.log(-5);
      } else {
        this.error = true
        this.errorMsg = 'Enter a valid email'
        console.log(5);
        setTimeout(() => {
              this.error = false;
              this.errorMssg = "";
            }, 20000);
      }
      }
    },
    togglePassword(){
      if(this.type == 'password'){
        this.type = 'text'
      }else{
        this.type = 'password'
      }
    }
  },
};
</script>

<style scoped>
.col:hover {
  background: rgb(248, 255, 253);
}
</style>
