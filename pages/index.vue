<template>
<div class="m-0 p-0">
  <!-- Hero Section -->
<div class="hero w-full  relative flex flex-col">
<div class="absolute-1 absolute top-0 left-0 w-full h-full">
<nav class="w-full h-fit flex justify-between items-center px-5 py-6">
  <div class="logo"><div class="text-2xl sm:text-xl text-lg text-white">Movie-App</div></div>
<div class="mode-toggle"> 
  <input type="checkbox">
</div>
</nav>

<div class="details px-5 py-6 text-white relative flex flex-col justify-center items-center h-3/4">
  <h1 class="text-3xl sm:text-4xl md:text-6xl tracking-wide font-semibold mb-8 font-mono">Fun Place..</h1>
 <button> <a href="#movie-grid" class="learn-more">See All Movies</a>
 </button>

</div></div>
</div>

<!-- Search Bar -->
<div class="search-bar">
  <form class="col-span-12 md:col-span-6">
      <div class="relative ">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none form-pp"
        >
         <i class="fas fa-search text-gray-700"></i>
        </div>
        <input
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:border-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-xs"
          placeholder="Search user by name"
          required
        />
      </div>
    </form>
  </div>
<!-- Movie Grid -->
<div id="movie-grid" class="h-screen"></div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      movies:[]
    }
  },
  async fetch(){
await this.getMovies()
  },
  methods:{
    async getMovies(){
    let data = await  fetch('https://api.themoviedb.org/3/movie/550?api_key=ebc21b23a1915d563377f4c0dfba0acb&page=1')
    let res = await data.json();
    console.log(res.result);
    }
  }
}
</script>
<style scoped lang="scss">
body{
  scroll-behavior: smooth;
}
*{
  box-sizing: border-box;

}
.hero{
  background: url(../assets/hero.jpg) no-repeat center center;
  height: 400px;
  max-height: fit-content;
  perspective: 1000px;
}
.absolute-1{
  background: rgba(0, 0, 0, 0.4);
}
input[type='checkbox']{
    position: relative;
    border:none;
    -webkit-appearance: none;
    background: white;
    outline:none;
    height:25px;
    width: 82px;
    border-radius: 15px;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type='checkbox']::before{
    content:'';
    position:absolute;
    width: 25px;
    height:20px;
    border-radius: 15px;
    transition: .75s ease all;
    top: 2.5px;
    left:5px;
    background:#363030;
    transform:scale(1.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input:checked[type='checkbox']:before{
    background: #ccc;
    left:52px;
}
button{
  border:none;
  padding:8px 40px 8px 40px;
  border-radius:5px;
    box-shadow:0px 10px 0px 0px rgba(0, 0, 0, 0.4), 
      0px 0px 10px 0px rgba(120, 120, 120, 0.4);
  color:white;
  background:rgba(0, 0, 0, 0.8);
  cursor:pointer;
  transition:all 0.16s;
  position:relative;
  top:0;
}
button:focus{
  outline:none;
}
button:active, button:hover{
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.4);
  top:5px;
}
#default-search, i.fa-search{
  transition: all ease .4s;
  cursor: pointer;
}
#default-search:focus i.fa-search{
  transform: rotate(360deg);
}
</style>