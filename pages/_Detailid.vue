<template>
  <div v-if="!$fetch.pending" :class="[$store.state.theme? 'darkMode' : 'lightMode']">
    <Navbar/>
    <NuxtLink
      to="/"
      class="
      pt-20
        p-5
        w-full
        cursor-pointer
        hover:tracking-wider
        flex
        justify-start
        items-center
      "
    >
      <i class="fas fa-arrow-left"></i>
      <p class="text-lg ml-2">Home Page</p>
    </NuxtLink>
    <div class="rowe">
      <div class="col-2">
        <div class="image-container">
          <div
            class="
              absolute
              top-0
              left-0
              h-full
              w-full
              flex
              justify-center
              items-center
            "
          >
            <a :href="movie.homepage" target="_blank">
              <div class="bg-yellow-500 rounded-full w-30 h-30 text-white p-5">
                <i
                  class="fa-solid fas fa-play font-bold text-2xl text-white"
                ></i></div
            ></a>
          </div>
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
        </div>
      </div>
      <div class="col-3">
        <div>
          <div class="name mb-5 mt-5 sm:mt-0">
            <h2 class="font-semibold text-xl md:text-3xl sm:text-2xl">
              {{ movie.title }}
            </h2>
          </div>
          <div class="details rowe2">
            <div class="col-6">
              <p class="sm:w-3/4 md:w-1/2 w-full mb-3">
                Description:<span>{{ movie.overview }}</span>
              </p>
              <p class="mb-3">
                Vote Counts:
                <span>{{ movie.vote_count }}</span>
              </p>

              <p >
                Released on:<span>{{
                  new Date(movie.release_date).toLocaleString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                }}</span>
              </p>
            </div>
            <div class="col-6"></div>
          </div>
          <div class="bordered">
            <p class="font-bold">Genres:</p>
            <div class="grid">
            <div class="bod" v-for="(item, ind) in movie.genres" :key="ind">
              <p class="back" v-if="ind < movie.genres.length - 1">
                {{ item.name +','}}
              </p>
              <p class="back"  v-else>{{item.name + '.'}}</p>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
<Loading/>
  </div>
</template>


<script >
import Navbar from '../components/navbar.vue';
import Loading from '../components/Loading.vue';
export default {
    name: "singleMovie",
    async fetch() {
        await this.getSingleMovie();
    },
    // delay for fetching
    head() {
        return {
            title: this.movie.title,
        };
    },
    data() {
        return {
            movie: "",
        };
    },
    methods: {
        async getSingleMovie() {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.Detailid}?api_key=ebc21b23a1915d563377f4c0dfba0acb&language=en-US`);
            const result = await data.json();
            this.movie = result;
            console.log(this.movie);
        },
    },
    components: { Navbar, Loading }
};
</script>

<style scoped lang="scss">

.lightMode{
  background: #E7EFF5;
  color: #1C1C1E;

}
.darkMode{
  background: #1C1C1E;
  color: #E7EFF5;

}
.rowe,
.rowe2 {
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  width: 100%;
  position: relative;
}
.rowe {
  padding: 0 2rem;
}
.details p {
  font-weight: 800;
  line-height: 1.6rem;
}
.details p span {
  font-weight: normal;
  margin-left: 5px;
}
.image-container {
  position: relative;
  height: 100%;
  max-height: calc(100vh - 8rem);
  max-width: 100%;
  margin-bottom:3rem;

  .absolute {
    z-index: 8888;
  }
}
img {
  height: 100%;
  position: relative;
  width: 100%;
}
.rowe .col-2 {
  position: relative;
  width: 40%;
}
.rowe .col-3 {
  width: 56%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bordered {
  margin-top: 1rem;
  display: flex;
}

.bordered .bod {
 
}
.bordered .bod p.back {
  width: fit-content;
  margin: 0 10px 10px 10px;
  height: fit-content;

  transition: ease 0.3s;
}
.grid {
    display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

@media (max-width: 700px) {
  .rowe2 {
    flex-direction: column;
  }
  img {
    width: 100%;
  }
}
@media (max-width: 500px) {
 
  .rowe
 {
    flex-direction: column;
  }
  .bod {
    margin-top: 0.2rem;
  }
  .rowe .col-2,
  .rowe .col-3 {
    width: 100%;
  }
}
</style>