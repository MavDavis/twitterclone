<template>
<div class="w-full">
  <div class="flex w-full">
      <div class="xs:w-5/6 w-full sm:w-3/5  border-x  min-h-screen h-full">
        <SidebarRight :gray= false />
          </div>
          <!-- Right Sidebar -->
          <div class="sm:w-3/5 xs:w-1/6 w-0 hidden sm:block px-4">
            <who-to-follow  title="Who to follow" v-if="loggedIn"/>
            <div class="w-full rounded-lg border my-4 py-4" v-else>
              <div class="flex justify-center ">
      <div class="w-fit"><page-header name="New to Twitter" /></div>
    </div>
    <div class="flex flex-col items-center w-full  mx-auto px-4 ">
      <button @click="signGoogle()"
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
    <button @click="signUpClickOn()"
        class="w-full xs:w-3/5 border rounded-full p-1 text-xs my-4 py-2 text-white bg-dim-900"
      >
      Sign up with email
      </button>
      <p class="w-full xs:w-3/5 text-sm">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
  </div>
            </div>
          </div>
    </div>
    <ModalSignup v-if="signUpClicked" @closeModal="signUpClickOff()"/>
</div>
    </template>
    
    <script setup>
    // import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    // import { firebaseAuth } from "../firebase"
    import { ref } from "vue";

    const signUpClicked = ref(false)


// function signGoogle(){
// signInWithPopup(firebaseAuth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   })}
const signUpClickOn = ()=>{
  signUpClicked.value = true
}
const signUpClickOff = ()=>{
  signUpClicked.value = false
}

    const loggedIn = ref(false)

    </script>
    
    <style>
    
    </style>