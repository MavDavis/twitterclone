<template>
  <div class="w-full" @mouseover="$store.commit('checkForaddedDetails')">
    <register :logo="true" @closeModal="closeModal">
      <p class="text-lg flex justify-center px-4 text-red-300" v-if="$store.state.error">{{$store.state.errMssg}}</p>

      <div class="flex justify-start px-4 pl-16 w-full">
        <div class="w-fit"><page-header name="Create your account" /></div>
      </div>
      <div class="w-full relative px-4 flex flex-col items-center">
        <input
          type="text"
          v-model="$store.state.userProfile.name"
          placeholder="John Doe"
          class="block p-4 xs:w-3/4 w-full bg-white text-sm text-dim-900 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
        /><input
          type="text"
          v-model="$store.state.userProfile.email"
          placeholder="Email"
          class="block p-4 bg-white xs:w-3/4 w-full text-sm text-dim-900 border border-slate-300 rounded-lg focus:outline-none active:outline-none active:border-dim-500 focus:ring-1 focus:ring-dim-500 mb-5"
        />
        <div class="w-full flex item-center justify-center relative">
          <input
            type="checkbox"
            @click="togglePassword()"
            class="absolute top-1/3 right-14 xs:right-28 z-50"
          />
          <input
            :type="type"
            v-model="$store.state.userProfile.password"
            placeholder="Password"
            class="block p-4 xs:w-3/4 w-full text-sm text-gray-900 border border-slate-200 rounded-lg focus:outline-none active:outline-none relative active:border-dim-500 focus:ring-1 focus:ring-dim-500"
          />
        </div>
      </div>
      <div class="w-full px-4 mt-2">
        <h4 class="font-semibold text-xl">Date of birth</h4>
        <p class="text-sm w-3/4">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <div class="w-full flex items-center mt-4 justify-between">
          <select
            name="Month"
            v-model="$store.state.userProfile.mob"
            class="w-1/3 border block rounded px-2 xs:px-4 py-2 text-lg text-gray-900 focus:outline-none active:outline-none active:border-dim-100 focus:ring-1 focus:ring-dim-100 bg-white"
          >
            <option v-for="(yr, ind) in month" :key="ind" :value="yr">
              {{ yr }}
            </option>
          </select>

          <select
            name="Date"
            v-model="$store.state.userProfile.dob"
            class="w-1/4 border rounded block px-2 xs:px-4 py-2 text-lg text-gray-900 focus:outline-none active:outline-none active:border-dim-100 focus:ring-1 focus:ring-dim-100 bg-white"
          >
            <option v-for="(yr, ind) in date" :key="ind" :value="yr">
              {{ yr }}
            </option>
          </select>
          <select
            name="Year"
            v-model="$store.state.userProfile.yob"
            class="w-1/4 border rounded block px-2 xs:px-4 py-2 text-lg text-gray-900 focus:outline-none active:outline-none active:border-dim-100 focus:ring-1 focus:ring-dim-100 bg-white"
          >
            <option v-for="(yr, ind) in year" :key="ind" :value="yr">
              {{ yr }}
            </option>
          </select>
        </div>

        <button
        @click="$store.commit('signup')"
          class="w-full xs:w-3/4 border flex mx-auto justify-center rounded-full text-lg text-bold p-3 mt-10"
          :class="[
            $store.state.addedDetails
              ? 'bg-dim-900 text-white'
              : 'bg-slate-300',
          ]"
          :disabled="$store.state.addedDetails ? false : true"
        >
          Signup
        </button>
      </div>
    </register>
    <div  v-if="$store.state.loading"><Loading/></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "password",
      month: [
        "January",
        "February",
        "march",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      year: [],
      date: [],
      addedDetails: false,
    };
  },
  mounted() {
    for (let i = 1; i < 32; i++) {
      this.date.push(i);
    }
    for (let i = 1960; i < 2023; i++) {
      this.year.push(i);
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    // const type = ref('password')
    togglePassword() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>

<style></style>
