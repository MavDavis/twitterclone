import { createStore } from 'vuex'
import { firebaseAuth } from "../firebase/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc, getDocs , doc, query, orderBy, deleteDoc, where , onSnapshot} from "firebase/firestore"; 
import { getFirestore,  setDoc } from "firebase/firestore";
export const state = () => ({
theme:true,
loggedIn: false,
userProfile:{
  name:'',
  age:'',
  mob:'',
  dob:'',
  yob:'',
  email:'dave@test.com',
  password:'123456789',
  followers:'',
  
  following:'',
  id:null,
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

  profileImage:'',
about:'',
link:'',
tweets:'',

likedTweets:''
},
addedDetails:false,
tweets:[],
loading:false,
error:false,
errMssg:'',
  })

  export const mutations = {
    toggleTheme(state,payload) {
      state.theme = payload
    },
    login(state, payload){
      state.loggedIn = true
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
            state.userProfile.id = userCredential.user.uid
            localStorage.setItem("userid", userCredential.user.uid);
            state.loading = false;
            localStorage.setItem("Is-logged", false);
            this.app.router.push('/')       
              }).catch((error) => {
           state.loading = false;
            state.error = true;
            state.errMssg = error.message
            setTimeout(() => {
              state.error = false;
              state.errMssg = "";
            }, 20000);
          });
      }
     }
  }