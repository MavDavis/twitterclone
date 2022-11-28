<template>
  <div class="flex w-full relative h-full body">
    <div
      class="xs:w-2/5 w-full border-x min-h-screen h-full xs:px-0 px-4"
      v-if="showchatUsers"
    >
      <searchbar placeholder="search direct message" class="p-4" />
      <div
        v-for="(msg, ind) in $store.state.userProfile.chats"
        :key="ind"
        @click="showChat(msg.userId)"
        class="cursor-pointer flex w-full items-center hover:bg-slate-100 p-4"
      >
        <div
          class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-900 mr-2"
        >
          <img class="relative" :src="msg.img" alt="" />
        </div>
        <div class="flex w-full relative flex-col">
          <div class="flex w-full relative items-center">
            <p class="text-sm font-semibold mr-2">
              {{ msg.name.slice(0, 8)
              }}<span v-if="msg.name.length > 8">...</span>
            </p>
            <p class="text-sm mr-auto">
              @{{ msg.nickname.slice(0, 8)
              }}<span v-if="msg.nickname.length > 8">...</span>
            </p>
            <p class="text-sm">
              {{ msg.message[msg.message.length - 1].time }}
            </p>
          </div>
          <p class="text-sm">
            <span v-if="msg.message[msg.message.length - 1].userId != 1">
              {{ msg.name }} sent
            </span>
            <span v-else>You sent </span>
            {{ msg.message[msg.message.length - 1].message }}
          </p>
        </div>
      </div>
    </div>
    <!-- Right Sidebar -->

    <div
      class="xs:w-3/5 w-full h-full relative xs:px-0 px-4"
      v-if="showchatMessages"
    >
      <div
        v-if="!showchatUsers"
        class="flex fixed top-4 xxs:left-16 left-4 justify-start items-center p-4"
        @click="showChatUsersAndCloseChatMessages"
      >
        <i
          class="fas fa-chevron-left text-dim-500 text-lg font-semibold hover:bg-dim-100 rounded-full p-2"
        ></i>
      </div>
      <!-- profile -->

      <div
        class="p-4 flex flex-col min-h-screen h-fit w-full relative"
        v-if="messages.length > 0"
      >
        <div
          class="flex flex-col items-center py-4 relative m-2 justify-center w-full border-b"
        >
          <div
            class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-500 ml-2"
          >
            <img class="relative" src="" alt="" />
          </div>
          <p>{{ user.name }}</p>
          <p>@{{ user.nickname }}</p>
        </div>
        <div
          class="mb-3 w-fit rounded-full px-4 py-2 relative flex justify-center chat-para h-fit items-center"
          v-for="(msg, ind) in messages"
          :key="ind"
          :class="[
            msg.userId == 1 ? 'bg-dim-500 ml-auto' : 'bg-slate-200 mr-auto',
          ]"
        >
          <p class="text-sm flex relative">{{ msg.message }}</p>
        </div>
        <div class="mt-auto mb-10 xs:mb-0 relative w-full flex items-center">
          <i
            class="absolute z-50 top-1 left-2 fas fa-image cursor-pointer text-sm text-dim-500 p-1 rounded-full hover:bg-dim-100"
          ></i
          ><i
            class="absolute z-50 top-1 left-7 fa-solid fa-face-smile cursor-pointer text-sm text-dim-500 p-1 rounded-full hover:bg-dim-100"
          ></i>
          <input
            v-model="newMessage"
            placeholder="Start a new message"
            class="relative block p-2 pl-16 w-full text-sm text-gray-900 rounded-full focus:outline-none active:outline-none active:border-dim-100 focus:ring-1 focus:ring-dim-100 bg-slate-200"
          />
          <i
            @click="sendMessage"
            class="fa fa-paper-plane absolute z-50 top-1 right-5 cursor-pointer text-sm p-1 rounded-full hover:bg-dim-100"
            :class="[newMessage.length > 0 ? 'text-dim-500' : 'text-dim-100']"
          ></i>
        </div>
      </div>
      <div
        class="flex flex-col justify-center h-screen p-4 w-3/6 mx-auto"
        v-else
      >
        <p class="text-2xl font-bold">Select a message</p>
        <p class="text-xs font-normal w-full mb-5">
          choose from your existing conversations, start a new one or just keep
          swimming.
        </p>
        <button
          class="text-sm flex items-center justify-center w-40 relative py-2 rounded-full my-1 hover:bg-dim-600 bg-dim-500 text-white"
        >
          New message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

// const showchatMessages = ref(null);
// const showchatUsers = ref(null);
// const showChatUsersAndCloseChatMessages = ()=>{
//   showchatUsers.value = true;
//     showchatMessages.value = false;
// }
// window.addEventListener("resize", () => {
//   if (window.innerWidth < 614) {
//     showchatUsers.value = true;
//     showchatMessages.value = false;
//   } else {
//     showchatMessages.value = true;
//     showchatUsers.value = true;  }
// });
onMounted(() => {
  // if (window.innerWidth < 614) {
  //   showchatUsers.value = true;
  //   showchatMessages.value = false;
  // } else {
  //   showchatMessages.value = true;
  //   showchatUsers.value = true;
  // }
});

// const messages = ref([]);
// const newMessage = ref("");
// const user = ref({});
// const showChat = (id) => {
//   if (window.innerWidth < 614) {
//     showchatUsers.value = false;
//     showchatMessages.value = true;
//   } else {
//     showchatMessages.value = true;
//     showchatUsers.value = true;
//   }

// };
// const sendMessage = () => {
//   if (newMessage.value.length > 0) {
//     messages.value.push({
//       userId: 1,
//       message: newMessage.value,
//       time: "02 september 2022", // get new time
//     });
//     newMessage.value = "";
//   }
// };
</script>
<script>
export default {
  created() {
    this.checkResize();
  },
  mounted() {
    this.checkResize();
    if (window.innerWidth < 614) {
      this.showchatUsers = true;
      this.showchatMessages = false;
    } else {
      this.showchatMessages = true;
      this.showchatUsers = true;
    }
    this.chat = this.$store.state.userProfile.chats;
  },
  data() {
    return {
      chat: [],
      messages: [],
      user: null,
      showchatMessages: null,
      showchatUsers: null,
      newMessage: "",
    };
  },
  methods: {
    showChat(id) {
      if (window.innerWidth < 614) {
        this.showchatUsers = false;
        this.showchatMessages = true;
      } else {
        this.showchatMessages = true;
        this.showchatUsers = true;
      }
      let msg = this.chat.find((item) => item.userId == id);
      this.messages = msg.message;
      this.user = {
        userId: msg.userId,
        name: msg.name,
        nickname: msg.nickname,
        img: msg.img,
      };
    },

    showChatUsersAndCloseChatMessages() {
      this.showchatUsers = true;
      this.showchatMessages = false;
    },
    sendMessage() {
      if (this.newMessage.length > 0) {
        this.messages.push({
          userId: 1,
          message: this.newMessage,
          time: "02 september 2022", // get new time
        });
        this.newMessage = "";
      }
    },
    checkResize() {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 614) {
          this.showchatUsers = true;
          this.showchatMessages = false;
        } else {
          this.showchatMessages = true;
          this.showchatUsers = true;
        }
      });
    },
  },
};
</script>
<style scoped>
.chat-para {
  max-width: 75%;
  width: fit-content;
}
/* .chat-para p{
  max-width: 95%;
  position: relative;
} */
.body {
  max-width: 100vw;
}
</style>
