<template>
  <div class="w-full flex justify-center items-center flex-col relative">
    <div class="search-bar flex justify-center items-center w-full">
      <div class="relative w-full border-b-2">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none form-pp"
        >
          <i class="fas fa-search text-dim-500"></i>
        </div>
        <input
          placeholder="search by username"
          @keypress.enter="searchUserInModal()"
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 focus:outline-none"
          v-model="search"
          required
        />
      </div>
    </div>
    <div class="w-full flex justify-end items-center mt-4 px-4">
      <button
      @click="addChat()"
        class="rounded-full p-2 px-5 flex items-center text-white"
        :class="[nextActive ? 'bg-dim-900 ' : 'bg-slate-600']"
        :disabled="nextActive ? false : true"
      >
        Next
      </button>
    </div>
    <div v-if="docsIsPopulated" class="w-full relative">
      <div v-for="item in docs" :key="item.id" class="w-full relative">
        <div
          class="flex w-full items-center px-4 py-2 hover:bg-slate-200 cursor-pointer mt-4 relative"
          @click="nextActive = true"
        >
          <div
            class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-900 mr-2"
          >
            <img class="relative" :src="item.data().img" alt="" />
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="text-xl font-bold">{{ item.data().Fullname }}</h3>
            <p class="text-xs">@{{ item.data().Username }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      search: "",
      docs: [],
      docsIsPopulated: false,
      nextActive: false,
    };
  },
  methods: {
    addChat(){
      console.log(this.docs);
      this.$store.commit('addChat', this.docs)
    },
    async searchUserInModal() {
      const q = query(
        collection(db, "User"),
        where("Username", "==", this.search.toLowerCase())
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty === true) {
        console.log("empty");
      } else {
        querySnapshot.forEach((doc) => {
          //   console.log(doc.id, " => ", doc.data());

          this.docsIsPopulated = true;
let res = this.docs.find(item=> item.id === doc.id)
if(res == undefined){
  console.log(doc.data());
    this.docs.push(doc.data());
    console.log(this.docs);

}else{
    return
}
        });
      }
    },
  },
};
</script>

<style></style>
