<template>
      <nav class="w-full nav-1 h-fit flex justify-between items-center px-5 py-6">
      <div class="logo">
        <div class="text-2xl sm:text-xl text-lg text-white">
          <NuxtLink to="/">Movie-App</NuxtLink>
        </div>
      </div>
      <div class="mode-toggle">
        <input type="checkbox" 
      @click="toggleTheme()"
      v-model="$store.state.theme"
        />
      </div>
    </nav>
</template>

<script>
export default {
    data(){
return{
    theme:false,
}
    },
methods:{
    toggleTheme() {
        this.theme = !this.theme
        this.$store.commit("toggleTheme", this.theme)  
          },
}
}
</script>
<style scoped>
.nav-1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8888;
  background: rgba(0, 0, 0, 0.4);
}
input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: white;
  outline: none;
  height: 25px;
  width: 82px;
  border-radius: 15px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 20px;
  border-radius: 15px;
  transition: 0.75s ease all;
  top: 2.5px;
  left: 5px;
  background: #363030;
  transform: scale(1.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input:checked[type="checkbox"]:before {
  background: #ccc;
  left: 52px;
}
</style>
