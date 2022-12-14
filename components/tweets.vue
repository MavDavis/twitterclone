<template>
  <section class="w-full h-full relative">
    <ul class="flex w-full flex-col relative">
      <li
        class="border-b w-full relative"
        v-for="(item, ind) in tweets"
        :key="ind"
      >
        <div class="flex w-full relative">
          <div class="img w-16 p-4">
            <div
              class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-100 mr-2"
            >
              <img
                class="relative w-full h-full rounded-full"
                :src="item.userImg"
                alt=""
              />
            </div>
          </div>
          <div class="width">
            <div class="py-2" v-if="(item.img == '')">
              <p class="text-xs font-semibold">No about</p>
              <div class="flex justify-between w-full items-center">
                <p class="text-sm">
                  <span class="font-semibold">{{ item.Fullname }} </span
                  >{{ item.Username }}  -{{new Date(item.time.seconds *1000).toLocaleDateString('en-us', { month:"short", day:"numeric", year:"numeric"})}}
                </p>

                <i class="fas fa-ellipsis"></i>
              </div>
              <p class="text-sm">{{ item.tweets }}</p>
              <div class="flex justify-between w-5/6 pt-2">
                <div class="flex items-center cursor-pointer">
                  <i class="far fa-comment"></i>
                  <span class="ml-1">{{ item.comment.length }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="far fa-retweet"></i>
                  <span class="ml-1">{{ item.retweets }}</span>
                </div>
                <div class="flex items-center cursor-pointer" @click="like(item.id)">
                  <i class="hover:far hover:text-dim-1000 fa-heart" :class="[ item.likes.some(item => item.id === $store.state.userProfile.id) ? 'text-dim-1000 fas' : ' far ']"></i>
                  <span class="ml-1">{{ item.likes.length }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path
                        d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                      ></path>
                    </g>
                  </svg>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="py-2" v-else>
              <p class="text-xs font-semibold">no about</p>
              <div class="flex justify-between w-full mb-1 items-center">
                <p class="text-sm">
                  <span class="font-semibold">{{ item.Fullname }} </span
                  >{{ item.Username }} -{{new Date(item.time.seconds *1000).toLocaleDateString('en-us', { month:"short", day:"numeric", year:"numeric"})}}
                </p>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div class="xs:h-fit  h-36 rounded-lg my-2  w-full">
                <img v-if="item.img.length" class="rounded-lg style-tweet-img relative object-fill" :src="item.img" alt="" />
              </div>
              <p class="text-sm">{{ item.tweets }}</p>
              <div class="flex w-5/6 justify-between pt-2">
                <div class="flex items-center cursor-pointer">
                  <i class="far fa-comment"></i>
                  <span class="ml-1">{{ item.comment.length }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <i class="far fa-retweet"></i>
                  <span class="ml-1">{{ item.retweets }}</span>
                </div>
                <div class="flex items-center cursor-pointer" @click="like(item.id)">
                  <i class=" fa-heart" :class="[ item.likes.some(item => item.id === $store.state.userProfile.id) ? 'text-dim-1000 fas' : ' far']" ></i>
                  <span class="ml-1">{{ item.likes.length }}</span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path
                        d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                      ></path>
                    </g>
                  </svg>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default{

  computed:{
    tweets(){
      return this.$store.state.tweets
    },

  },  watch: {

    },
    methods:{
      like(item){
        this.$store.commit('likeTweet', item)
      }
    }
}
</script>

<style scoped lang="scss">
.width {
  position: relative;
  width: calc(100% - 4rem);
  padding-right: 16px;
}
svg, i {
  display:flex;
  align-items:center;
  justify-content: center;
  --tw-text-opacity: 1;
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem;
  height: 32px;
  width: 32px;
  margin-right: 8px;
  padding: 4px;
  border-radius: 50%;
  &:hover {
    background: rgb(179 233 225 / var(--tw-text-opacity));
    cursor: pointer;
    fill: rgb(29 155 240);
    color: rgb(29 155 240);
  }
}
.style-tweet-img{
  max-width:100%;
  max-height:100%;
}
</style>
