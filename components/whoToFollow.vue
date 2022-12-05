<template>
     <div class="max-w-full   relative  rounded-lg p-4 m-4" :class="[white?'bg-white':' bg-slate-100 ']">
  <h1 class="font-bold text-lg mb-5 ">{{title}}</h1>

  <div class="flex w-full items-center flex-col">
    <div
      class="flex justify-between w-full items-center mb-3"
      v-for="(person, ind) in this.$store.state.whoToFollow.slice(0,3)"
      :key="ind"
    >
    <div class="flex items-center">
        <div
        class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-900 mr-2"
      >
        <img v-if="person.profileImage.length" class="relative w-full h-full rounded-full" :src="person.profileImage" alt="" />
      </div>
      <div class=" items-start flex flex-col">
        <p class="text-sm">{{person.Fullname}}</p>
        <p class="text-sm">@{{person.Username}}</p>
      </div>
    </div>
      <button @click="follow(person.id)"
            class="flex items-center justify-center w-20 relative py-1 text-sm rounded-full my-1 hover:bg-dim-800 bg-dim-900 text-white"
          >
            <span v-if="person.followers">Follow</span>
            <span v-else>Unfollow</span>
          </button>
    </div>
</div>
<p class="flex cursor-pointer text-sm justify-start items-center text-dim-500">
    Show more
</p>
  </div>
</template>

<script>
export default{
  data(){
return{

}
  },
  props:['title', 'white'],
methods:{
  follow(id){
    this.$store.commit('follow', id)
  }
},
computed:{
  checkFollow(id){
    let data = this.$store.state.userProfile;
    let checkers = data.followers.find(item => item.id === id)
    if(!checkers){
      return false
    }else{
      return true
    }
  }
}
}
</script>

<style></style>
