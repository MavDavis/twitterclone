<template>
  <div class="flex w-full h-full relative">
    <div class="xs:w-5/6 w-full sm:w-3/5  border-x min-h-screen h-full relative">
      <!-- top -->
      <div class="my-4">
        <page-header :name="$store.state.userProfile.Username" nomOfTweets="61" :py="true" />
      </div>
      <div class="relative w-full h-fit">
        <div class="h-40 w-full bg-slate-200 relative"></div>
        <div class="profile-pic bg-slate-200">
          <img v-if="$store.state.userProfile.profileImage.length" class="relative w-full h-full rounded-full"  :src="$store.state.userProfile.profileImage" alt="" />
          <div class="hover"></div>
        </div>
        
        <button
          class="editProfile font-semibold text-xs hover:bg-slate-200 border rounded-full px-2 py-1"
        >
          Edit profile
        </button>
      </div>

      <!-- details -->
      <div class="relative top-20 ">
        <div class="my-4 px-4">
          <h3 class="text-xl font-bold">{{$store.state.userProfile.Fullname}}</h3>
          <p class="text-xs">@{{$store.state.userProfile.Username}}</p>
        </div>
        <!-- about -->
        <p class="text-sm px-4">
      {{User.about}}
        </p>
        <div class="flex flex-wrap px-4">
          <p class="flex items-center mr-2 text-sm cursor-pointer">
            <i class="fas fa-location-dot"></i><span></span>
          </p>
          <p
            v-if="user.link"
            class="flex text-sm cursor-pointer items-center mr-2"
          >
            <i class="fa-solid fa-link"></i><span>{{ User.links }}</span>
          </p>
          <p class="flex items-center mr-2 text-sm cursor-pointer">
            <i class="fas fa-balloons">b</i><span>{{ User.age }}</span>
          </p>
          <p class="flex items-center mr-2 text-sm cursor-pointer">
            <i class="fas fa-location-dot"></i><span>{{ user.join }}</span>
          </p>
        </div>
        <div class="flex mt-2 px-4">
          <p class="mr-2 text-sm">{{ User.followers.length }} followers</p>
          <p class="text-sm">{{ User.following.length }} following</p>
        </div>
        <div class="w-full flex justify-between mt-2 px-4">
          <p @click="count()" class="hover:bg-slate-200 p-2 cursor-pointer">
            Tweets
          </p>
          <p class="hover:bg-slate-200 p-2 cursor-pointer">Tweets & replies</p>
          <p class="hover:bg-slate-200 p-2 cursor-pointer">Media</p>
          <p class="hover:bg-slate-200 p-2 cursor-pointer">Likes</p>
        </div>
        <tweets/>
      </div>
    </div>
    <!-- Right Sidebar -->
    <div class="sm:w-3/5 xs:w-1/6 w-0 hidden sm:block mb-4">
      <!-- show all the first eight tweets(images) in a grid view -->
      <div class="mx-4"><searchbar placeholder="search Twitter" />
      <who-to-follow title="You may like" /></div>
      <div class="bg-slate-100 rounded-lg mx-4">
        <niger-trend />
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";

// const user = ref({
//   name: "User",
//   location: "Abuja, Nigeria",
//   link: "http://github.com/MavDavis",
//   birthday: "03 March 2000",
//   join: "03 September 2022",
//   following: 65,
//   followers: 19,
// });
export default{
  mounted(){
    console.log(this.User);
  },
  data(){
    return{
       user : {
  name: "User",
  location: "Abuja, Nigeria",
  link: "http://github.com/MavDavis",
  birthday: "03 March 2000",
  join: "03 September 2022",
about:''
    }
  }
},
computed:{
User(){
  let { mob, yob, name, password, email, dob , followers,following, links, about, tweets, id} = this.$store.state.userProfile;
  let age = (dob, mob, yob)
  tweets = this.$store.state.tweets.filter(item => item.id === id)
  following = this.$store.state.whoToFollow
return{
 name, password, email,followers,following, links, age, about, tweets,
}
}
}
}
</script>

<style scoped>
.editProfile {
  position: absolute;
  bottom: -25%;
  right: 1rem;
}
.profile-pic {
  position: absolute;
  bottom: -50%;
  left: 1rem;
  border: 2px solid #fff;
  height: 9rem;
  width: 9rem;
  border-radius: 9999px;
  z-index: 9999px;
}
.hover {
  background: rgba(0, 0, 0, 0.1);
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.profile-pic:hover .hover {
  display: block;
  border-radius: 9999px;
  cursor: pointer;
}
</style>
