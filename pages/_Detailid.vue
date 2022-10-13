<template>
    <div>
        <NuxtLink to="/" class=" p-5 w-full cursor-pointer hover:tracking-wider flex justify-start items-center">

            <i class="fas fa-arrow-left"></i>
        <p class="text-lg">Home Page</p>
    </NuxtLink>
      <div class="w-full relative py-11 px-5 movie">
    <!-- movie -->
    <div class="image-div w-full relative">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        alt=""
      />
    </div>
  </div>    </div>

</template>


<script >
export default {
  name: "singleMovie",
  async fetch() {
    await this.getSingleMovie();
  },
  // delay for fetching
  fetchDelay: 1000,
  head() {
    return {};
  },
  data() {
    return {
      movie: "",
    };
  },
  methods: {
    async getSingleMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.Detailid}?api_key=ebc21b23a1915d563377f4c0dfba0acb&language=en-US`
      );
      const result = await data.json();
      this.movie = result;
    },
  },
};
</script>

<style>
</style>