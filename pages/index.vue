<template>
  <div class="m-0 p-0 body" :class="[theme? 'darkMode' : 'lightMode']">
    <!-- fixed Nav -->
  <Navbar/>
    <!-- Hero Section -->
    <div class="hero w-full relative flex flex-col">
      <div class="absolute-1 absolute top-0 left-0 w-full h-full">
        <div
          class="
            details
            px-5
            py-6
            text-white
            relative
            flex flex-col
            justify-center
            items-center
            h-3/4
          "
        >
          <h1
            class="
              text-3xl
              sm:text-4xl
              md:text-6xl
              tracking-wide
              font-semibold font-mono
            "
          >
            Fun Place..
          </h1>
          <div class="typewriter">
            <h1 class="font-bold text-lg sm:text-xl md:text-2xl">
              Take some time off work. Have fun!!
            </h1>
          </div>
          <button>
            <a href="#movie-grid" class="learn-more">See All Movies</a>
          </button>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="search-bar my-8 flex justify-center items-center w-full">
      <div class="relative">
        <div
          class="
            flex
            absolute
            inset-y-0
            left-0
            items-center
            pl-3
            pointer-events-none
            form-pp
          "
        >
          <i class="fas fa-search text-gray-700"></i>
        </div>
        <input
          type="search"
          id="default-search"
          class="
            block
            p-4
            pl-10
            sm:w-96
            w-full
            text-sm text-gray-900
            rounded-lg
             border-gray-300
            focus:border-0
          active:border-yellow-500
            max-w-xs
          "
          :class="[theme?'searchDark':'searchLight']"
          placeholder="Search name and hit enter.."
          required
          v-model.lazy="searchInput"
          @keyup.enter="SearchMovies()"
        />
      </div>
    </div>
    <!-- errorDiv -->
    <div class="error">
      <p v-if="error" class="text-red-400 text-xl text-center">{{ err }}</p>
    </div>
    <!-- Movie Grid -->
    <div id="movie-grid" class="min-h-screen grid mb-5">
      <div
        class="card"
        v-for="item in movies"
        :key="item.id"
        @click="pushToNewRoute(item.id)"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`"
          alt=""
          class="relative w-full h-full"
        />
        <div
          class="card-absolute flex flex-col justify-center items-center px-5"
        >
          <div
            class="
              absolute
              top-0
              left-0
              bg-yellow-500
              text-white
              px-5
              py-4
              rounded-br-lg
            "
          >
            {{ item.vote_average }}
          </div>
          <h3 class="font-bold text-center text-white text-xl mb-4">
            {{ item.title.slice(0, 25)
            }}<span v-if="item.title.length > 25">...</span>
          </h3>
          <p class="text-yellow-500 text-lg text-center">
            {{ item.overview.slice(0, 90)
            }}<span v-if="item.overview.length > 90">...</span>
          </p>
          <NuxtLink
            :to="{ name: 'Detailid', params: { Detailid: item.id } }"
            class="nuxt-button"
            >More Details</NuxtLink
          >
        </div>
      </div>
    </div>
    <!-- next button -->
    <div class="flex w-full relative justify-between items-center my-5">
      <div v-if="pageNum > 1" @click="prevPage()" class="w-1/4 cursor-pointer hover:tracking-wider flex justify-center items-center">
        <i class="fas fa-arrow-left"></i>
        <p class="text-lg">Prev</p>
      </div>
      <div @click="nextPage()" class="w-1/4 cursor-pointer hover:tracking-wider flex justify-center items-center">
        <i class="fas fa-arrow-right"></i>
        <p class="text-lg">Next</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
export default {
    name: "IndexPage",
    data() {
        return {
            movies: [],
            pageNum: 1,
            searchInput: "",
            err: "",
            error: true,
            theme: false
        };
    },
    async fetch() {
        await this.getMovies();
    },
    methods: {
     
        pushToNewRoute(id) {
            this.$router.push({ name: "Detailid", params: { Detailid: id } });
        },
        async nextPage() {
            this.pageNum++;
            await this.getMovies();
            window.scrollTo(0, 0);
        },
        async prevPage() {
            this.pageNum--;
            await this.getMovies();
            window.scrollTo(0, 0);
        },
        async getMovies() {
            let data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebc21b23a1915d563377f4c0dfba0acb&language=en-US&page=${this.pageNum}`);
            let res = await data.json();
            this.movies = res.results;
        },
        async SearchMovies() {
            if (this.searchInput != "") {
                let data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ebc21b23a1915d563377f4c0dfba0acb&language=en-US&page=1&query=${this.searchInput}`);
                let res = await data.json();
                if (res.results.length > 0) {
                    this.movies = res.results;
                }
                else {
                    this.err = "no movie found with this name";
                    this.error = true;
                    setTimeout(() => {
                        this.err = "";
                        this.error = false;
                    }, 5000);
                }
            }
        },
    },
    components: { Navbar }
};
</script>
<style scoped lang="scss">
.body {
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
}
.body.darkMode{
  background: #1C1C1E;
}
.body.lightMode{
  background: #E7EFF5;
}
.searchDark{
  background: #E7EFF5;
  color: #1C1C1E;

}
.searchLight{
  background: #1C1C1E;
  color: #E7EFF5;

}
* {
  box-sizing: border-box;
}

.hero {
  background: url(../assets/hero.jpg) no-repeat center center;
  max-height: fit-content;
  perspective: 1000px;
  height: 100vh;
}
.absolute-1 {
  background: rgba(0, 0, 0, 0.4);
}

button, .nuxt-button {
  border: none;
  padding: 8px 40px 8px 40px;
  border-radius: 5px;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 0.4),
    0px 0px 10px 0px rgba(120, 120, 120, 0.4);
  color: white;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 0.16s;
  position: relative;
  top: 0;
}

button:focus, .nuxt-button:focus {
  outline: none;
}
button:active,
.nuxt-button:active,
.nuxt-button:hover,
button:hover {
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.4);
  top: 5px;
}
#default-search,
i.fa-search {
  transition: all ease 0.4s;
  cursor: pointer;
}
#default-search:focus i.fa-search {
  transform: rotate(360deg);
}
.grid {
  width: 95vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
}
.card {
  position: relative;
  .card-absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: ease-in-out 0.4s;
  }
  &:hover .card-absolute {
    cursor: pointer;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
.typewriter h1 {
  color: rgb(234 179 8);
  margin: 2rem auto;
  overflow: hidden;
  border-right: 0.15em solid #fff;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 4.5s steps(30, end), blink-caret 0.6s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}
</style>