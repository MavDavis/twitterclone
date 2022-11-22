<template>
<div class="w-full">
  <register :logo="true" @closeModal="closeModal">
    <div class="flex justify-start px-4 pl-16 w-full">
      <div class="w-fit"><page-header name="Create your account" /></div>
    </div>
    <div class="w-full relative px-4 flex flex-col items-center">
      <input
        type="text"
        v-model="$store.state.userProfile.name"
        placeholder="John Doe"
        disabled
        class="block p-4 xs:w-3/4 w-full bg-white text-sm text-slate-400 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
      /><input
        type="text"
        v-model="$store.state.userProfile.email"
        placeholder="Email"
        disabled
        class="block p-4 bg-white xs:w-3/4 w-full text-sm text-slate-400 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
      />   <div class="w-full flex item-center justify-center relative">
          <input type="checkbox" @click="togglePassword()" class="absolute top-1/3 right-14 xs:right-28 z-50">
          <input
          :type="type"
          v-model="$store.state.userProfile.password"
          placeholder="Password"
          class="block p-4 xs:w-3/4 w-full text-sm text-gray-900 border border-slate-200 rounded-lg focus:outline-none active:outline-none relative active:border-dim-500 focus:ring-1 focus:ring-dim-500"
        />
        </div>
    </div>
    <div class="w-full px-4">
<h4 class="font-semibold text-xl">Date of birth</h4>  
    <p class="text-sm w-3/4">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
  <select name="Month" width="1/4"/>  
  </div>
  </register>
</div>
</template>
<script>
export default {
  data(){
return{
  type:'password'
}
  },
  methods:{
 closeModal () {
  this.$emit("closeModal");
},
// const type = ref('password')
 togglePassword (){
  if(this.type == 'password'){
 this.type = 'text'
}else{
  this.type = 'password'
}
}}
}
</script>

<style>

</style>

