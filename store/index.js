import { createStore } from "vuex";
import { firebaseAuth } from "../firebase/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  orderBy,
  deleteDoc,
  where,
  onSnapshot,
} from "firebase/firestore";
import { getFirestore, setDoc } from "firebase/firestore";
export const state = () => ({
  theme: true,
  loggedIn: false,
  userProfile: {
    name: "",
    age: "",
    mob: "Month",
    dob: "Date",
    yob: "Year",
    email: "",
    password: "",
    followers: "",

    following: "",
    id: null,
    chats: [
      {
        name: "Jeyi",
        nickname: "Jeyvers",
        userId: 0,
        message: [
          { userId: 0, message: "hy", time: "02-sept,2022" },
          {
            userId: 0,
            message: "Good day. How are you doing?",
            time: "02-sept,2022",
          },
          { userId: 1, message: "I am good and you?", time: "02-sept,2022" },
          { userId: 0, message: "I am okay, thanks.", time: "02-sept,2023" },
        ],
        img: "",
      },
      {
        name: "Babe",
        nickname: "Adole",
        userId: 2,
        message: [
          { userId: 2, message: "hy", time: "02-sept,2022" },
          {
            userId: 2,
            message: "Do you have those papers ready?",
            time: "02-sept,2022",
          },
          {
            userId: 1,
            message: "Not yet, It will be ready soon.",
            time: "02-sept,2022",
          },
          { userId: 2, message: "Okay", time: "02-sept,2022" },
        ],
        img: "",
      },
    ],

    profileImage: "",
    about: "",
    link: "",
    tweets: "",

    likedTweets: "",
  },
  addedDetails: false,
  tweets: [],
  loading: false,
  error: false,
  errMssg: "",
});

export const mutations = {
  toggleTheme(state, payload) {
    state.theme = payload;
  },
  login(state, payload) {
    if (state.userProfile.email === "" || state.userProfile.password === "") {
      return;
    } else {
      state.loading = true;

      signInWithEmailAndPassword(
        firebaseAuth,
        state.userProfile.email,
        state.userProfile.password
      )
        .then((userCredential) => {
          state.userProfile.id = userCredential.user.uid;
          localStorage.setItem("userid", userCredential.user.uid);
          state.loading = false;
          localStorage.setItem("Is-logged", false);
          state.loggedIn = true;
          this.app.router.push("/");
        })
        .catch((error) => {
          state.loading = false;
          state.error = true;
          state.errMssg = error.message;
          setTimeout(() => {
            state.error = false;
            state.errMssg = "";
          }, 20000);
        });
    }
  },
  checkForaddedDetails(state) {
    let user = state.userProfile;

    const { mob, yob, name, password, email, dob } = user;
    if (
      mob.toLowerCase() !== "month" &&
      !!mob &&
      yob !== "Year" &&
      !!yob &&
      name &&
      password &&
      email &&
      dob !== "Date" &&
      !!dob
    ) {
      state.addedDetails = true;
    } else {
      state.addedDetails = false;
    }
  },
   signup(state) {
    let user = state.userProfile;

    const { mob, yob, name, password, email, dob,id } = user;
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(user.email)) {
      state.loading = true;
      createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      )
        .then((userCredential) => {
          state.loggedIn = true
          id = userCredential.user.reloadUserInfo.localId;
          localStorage.setItem(
            "userid",
            userCredential.user.reloadUserInfo.localId
          );
          // localStorage.setItem("Is-logged", false);
          state.loading = false

        })
        .catch((err) => {
          state.loading = false;
          state.error = true;
          state.errMssg = err.message;
          setTimeout(() => {
            state.error = false;
            state.errMssg = "";
          }, 10000);
        })
        // .then(() => {
        //   setDoc(doc(db, "User", id), {
        //     Email: email,
        //     password: password,
        //     Username: name,
        //     DOB: dob + mob + yob
           
        //   });
        //   state.loading = false;
        // })
        .then(()=>{
          this.app.router.push("/");
        })
    
    } else {
      state.error = true;
      state.errMsg = "Enter a valid email";
      setTimeout(() => {
        state.error = false;
        state.errMssg = "";
      }, 20000);
    }
  },
};
