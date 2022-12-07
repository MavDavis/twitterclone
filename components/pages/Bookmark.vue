<template>
  <div class="flex w-full">
    <div class="xs:w-5/6 w-full sm:w-3/5  border-x min-h-screen h-full">
      <div class="flex flex-col justify-center pt-4">
        <page-header name="Bookmarks" :py = true />
        <p class="px-4">{{$store.state.userProfile.Username}}</p>
      </div>
      <div class="flex justify-center items-center flex-col px-4">
        <img src="../../assets/bookmark.png" alt="">
    <h4 class="text-2xl font-bold">Save tweets for later</h4>
    <p class="text-sm w-1/2">Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
      </div>
    </div>
    <!-- Right Sidebar -->
    <div class="sm:w-2/5 w-1/6 hidden sm:block" @scroll="handleScroll()">
      <SidebarRight :gray="true" />
      <who-to-follow title="Who to follow"/>
    </div>
  </div>
</template>

<script>
export default{
  methods: {
    handleScroll: function(el) {
      console.log(el);
        if((el.srcElement.offsetHeight + el.srcElement.scrollTop) >= el.srcElement.scrollHeight) {
console.log('hy');        }
  }}
}
</script>
<style></style>
