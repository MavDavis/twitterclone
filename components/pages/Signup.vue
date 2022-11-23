<template>
  <div class="w-full">
    <register>

    <div class="flex justify-center ">
      <div class="w-fit"><page-header name="Join twitter" /></div>
    </div>
    <div class="flex flex-col items-center w-full  mx-auto px-8 ">
      <button
        class="w-full xs:w-3/5 flex justify-center  border rounded-full p-1 text-sm col hover:border-dim-100"
      >
      <img class="h-5 mr-2" src="../../assets/google.jpg" alt=""><span> Google sign in  </span>

      </button>
      <button
        class="w-full xs:w-3/5 border rounded-full p-1 text-sm my-4 hover:bg-slate-100"
      ><i class="fa-brands fa-apple mr-2"></i>
<span>Sign in with Apple</span>
    </button>
    or
    <button @click="signUpClickOn"
        class="w-full xs:w-3/5 border rounded-full p-1 text-xs my-4 py-2 text-white bg-dim-900"
      >
      Sign up with email
      </button>
      <p class="w-full xs:w-3/5 text-sm">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
    <p class="relative mt-8">Have an account already <NuxtLink class="text-dim-500 font-semibold" to="/login">Log in</NuxtLink></p>
  </div>
  </register>
  <ModalSignup v-if="signUpClicked" @closeModal="signUpClickOff()"/>
  </div>

</template>

<script setup>
import { ref } from "vue";

const signUpClicked = ref(false)
const signUpClickOn = ()=>{
  signUpClicked.value = true
}
const signUpClickOff = ()=>{
  signUpClicked.value = false
}

</script>

<style>

</style>