<template>
  
 <RegisterTwo :logo="true" :close="true" @closeModal="closeModal" class="w-full">
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
          @keypress="debounceSearch()"
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
 <div class="w-full" v-if="keydownDone">
  <linear-loading v-if="loading"/>
  <div v-if="docsIsPopulated" class="w-full relative">
      <div v-for="item in docs" :key="item.id" class="w-full relative">
        <div
          class="flex w-full items-center px-4 py-2 hover:bg-slate-200 cursor-pointer mt-4 relative"
          @click="nextActive = true"
        >
          <div
            class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-900 mr-2"
          >
            <img class="relative" :src="item.img" alt="" />
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="text-xl font-bold">{{ item.Fullname }}</h3>
            <p class="text-xs">@{{ item.Username }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="w-full">
      <p class="text-lg">This Username does not exist</p>
    </div>
 </div>
  </div>
</RegisterTwo>

</template>

<script>
let dok = null;
import { db } from "../../firebase/index";
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      search: "",
      docs: [],
      keydownDone:false,
      docsIsPopulated: false,
      nextActive: false,
      docsIsEmpty: false,
      debounceTimeout:null,
      loading:false,
    };
  },
  methods: {
    debounceSearch: function() {
      if (this.debounceTimeout){ clearTimeout(this.debounceTimeout)};
      this.loading= true

      this.debounceTimeout = setTimeout(() => {
        this.searchUserInModal();
        this.loading= false
      }, 500); // delay for half second
    },
    closeModal() {
      this.$emit('closeModal')
    },
    addChat() {
      this.$store.commit("addChat", dok);
this.$emit('addchat')
    },
    async searchUserInModal() {
      const q = query(
        collection(db, "User"),
        where("Username", "==", this.search.toLowerCase())
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty === true) {
        this.docsIsEmpty = true;
        this.docs = []
      } else {
        querySnapshot.forEach((doc) => {
          this.docsIsPopulated = true;
          let res = this.docs.find((item) => item.id === doc.id);
          if (res == undefined) {
            dok = doc.data();
            this.docs = [...this.docs, dok];
          } else {
            return;
          }
        });
      }
      this.keydownDone = true

    },
  },
};
</script>

<style></style>
