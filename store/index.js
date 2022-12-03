import { createStore } from "vuex";
import { firebaseAuth } from "../firebase/index";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const provider = new GoogleAuthProvider();

import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  getDoc,
  addDoc,
  onSnapshot,
  getFirestore,
  setDoc,
  doc,
  query,
  orderBy,
  Timestamp,
  deleteDoc,
  where,
} from "firebase/firestore";
export const state = () => ({
  theme: true,
  newChatId: null,
  photoTweetFileUrl:'',
photoFileName:'',
  sidebarSide: false,
  loggedIn: false,
  IwantToTweet: false,
  youCanTweet:false,
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
    chats: [],

    profileImage: "",
    about: "",
    link: "",
    tweets: "",

    likedTweets: "",
  },
  tweetMessage: "",
  addedDetails: false,
  tweets: [],
  loading: false,
  error: false,
  errMssg: "",
});

export const mutations = {
  likeTweet(state, payload){
    
  },
  ckeckfortweetMessage(state){
    if(state.tweetMessage.length > 0){
      state.youCanTweet = true

    }else if( state.photoTweetFileUrl != null || state.photoTweetFileUrl != ''){
      state.youCanTweet = true

    }else{
      state.youCanTweet = false

    }
  },
  filenameChanged(state, payload){
    state.photoFileName = payload

  },
  createFileUrl(state, payload){
    state.photoTweetFileUrl = payload
    state.loading = true;
    let user = state.userProfile;
    if(state.tweetMessage.length > 0){
      state.youCanTweet = true

    }
   else if(!!state.photoTweetFileUrl){
      state.youCanTweet = true
      const imgRef = ref(
        storage,
        `documents/${state.photoFileName}`
      );

      uploadBytes(imgRef, state.photoTweetFileUrl)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");})
      .then(() => {
  getDownloadURL(imgRef).then((downloadURL) => {
    state.photoTweetFileUrl = (downloadURL);
    state.loading= false })  
  }).catch(err=>{
    console.log(err);
  })
}else{
  state.youCanTweet = false
}
  },
  toggleIwantToTweet(state) {
    state.IwantToTweet = !state.IwantToTweet;
  },
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
  async signup(state) {
    let user = state.userProfile;

    const { mob, yob, name, password, email, dob } = user;
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(user.email)) {
      state.loading = true;
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          state.loggedIn = true;
          user.id = userCredential.user.uid;

          state.loading = false;
        })
        .then(() => {
          let str = name.trim().split(/\s+/);
          setDoc(doc(db, "User", user.id.toString()), {
            Fullname: name,
            Username: str[0].toLowerCase(),

            age: "",
            DOB: dob + mob + yob,

            Email: email,
            password: password,
            followers: "",

            following: "",
            id: user.id,
            chats: [
              {
                Fullname: "Admin",
                Username: "Mavdavis",
                userId: 0,
                message: [
                  { userId: 0, message: "hy", time: "02-sept,2022" },
                  {
                    userId: 0,
                    message: "Good day. How are you doing?",
                    time: "02-sept,2022",
                  },
                  {
                    userId: user.id,
                    message: "I am good and you?",
                    time: "02-sept,2022",
                  },
                  {
                    userId: 0,
                    message: "I am okay, thanks.",
                    time: "02-sept,2023",
                  },
                ],
                img: "",
              },
              {
                Fullname: "Admin2",
                Username: "Adole",
                userId: 2,
                message: [
                  { userId: 2, message: "hy", time: "02-sept,2022" },
                  {
                    userId: 2,
                    message: "Do you have those papers ready?",
                    time: "02-sept,2022",
                  },
                  {
                    userId: user.id,
                    message: "Not yet, It will be ready soon.",
                    time: "02-sept,2022",
                  },
                  { userId: 2, message: "Okay", time: "02-sept,2022" },
                ],
              },
            ],

            profileImage: "",
            about: "",
            link: "",
            tweets: "",

            likedTweets: "",
          });
          state.loading = false;
          this.app.router.push("/");
        })
        .catch((err) => {
          state.loading = false;
          state.error = true;
          state.errMssg = err;
          console.log(state.error, state.errMssg);
          setTimeout(() => {
            state.error = false;
            state.errMssg = "";
          }, 10000);
        });
    } else {
      state.error = true;
      state.errMsg = "Enter a valid email";
      setTimeout(() => {
        state.error = false;
        state.errMssg = "";
      }, 20000);
    }
  },

  googleSignup(state) {
    let res = "";
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        res = result;
      })
      .then(() => {
        let user = res.user;
        console.log(user);
        let str = user.displayName.trim().split(/\s+/);
        setDoc(doc(db, "User", user.uid.toString()), {
          Email: user.email,
          password: "",
          Fullname: user.displayName,
          Username: str[0].toLowerCase(),

          DOB: "",
          followers: "",
          age: "",
          following: "",
          id: user.uid,
          chats: [
            {
              Fullname: "Admin",
              Username: "Mavdavis",
              userId: 0,
              message: [
                { userId: 0, message: "hy", time: "02-sept,2022" },
                {
                  userId: 0,
                  message: "Good day. How are you doing?",
                  time: "02-sept,2022",
                },
                {
                  userId: user.uid,
                  message: "I am good and you?",
                  time: "02-sept,2022",
                },
                {
                  userId: 0,
                  message: "I am okay, thanks.",
                  time: "02-sept,2023",
                },
              ],
              img: "",
            },
            {
              Fullname: "Admin2",
              Username: "Adole",
              userId: 2,
              message: [
                { userId: 2, message: "hy", time: "02-sept,2022" },
                {
                  userId: 2,
                  message: "Do you have those papers ready?",
                  time: "02-sept,2022",
                },
                {
                  userId: user.uid,
                  message: "Not yet, It will be ready soon.",
                  time: "02-sept,2022",
                },
                { userId: 2, message: "Okay", time: "02-sept,2022" },
              ],
              img: "",
            },
          ],

          profileImage: user.photoURL,
          about: "",
          link: "",
          tweets: "",

          likedTweets: "",
        });
        state.loading = false;
        state.loggedIn = true;
        this.app.router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  },
  logout(state) {
    console.log(firebaseAuth.currentUser);

    state.loading = true;
    signOut(firebaseAuth)
      .then(() => {
        state.loggedIn = false;
        localStorage.removeItem("userid");
        console.log(firebaseAuth.currentUser);
        this.app.router.push("/Explore");
        state.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  toggleSidebar(state) {
    state.sidebarSide = !state.sidebarSide;
  },
  async userDetail(state, payload) {
    state.loggedIn = true;

    const user = firebaseAuth.currentUser;
    const docRef = doc(db, "User", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let user = docSnap.data();

      state.userProfile = user;
      const colRef = collection(db, "tweets");
const q  = query(colRef, orderBy('time'))
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          let tweet = state.tweets;
          let newTweet = tweet.find((item) => item.id === doc.id);
          if (newTweet === undefined || newTweet === null) {
            state.tweets.push({ ...doc.data(), id: doc.id });
          }
        });
      });


    } else {
      console.log("No such document!");
    }
  },
  addChat(state, payload) {
    state.newChatId = payload.id;
    let chats = state.userProfile.chats;
    let addingNewChat = chats.find((item) => item.userId == payload.id);
    if (addingNewChat == undefined || addingNewChat == null) {
      chats = [
        ...chats,
        {
          Fullname: payload.Fullname,
          Username: payload.Username,
          userId: payload.id,
          message: [],
          img: payload.profileImage,
        },
      ];
    }
    let user = state.userProfile;
    state.userProfile = { ...user, chats };
    let username = state.userProfile.Username;
    username =
      username.slice(0, 1).toUpperCase() + username.slice(1, username.length);
    console.log(username);
    state.userProfile.Username = username;
  },
  TweetAMessage(state) {
   
    state.loading = true;
    let user = state.userProfile;
    let obj = {
      Fullname: user.Fullname,
      Username: user.Username,
      id: user.id,
      userImg: user.profileImage,
      img:state.photoTweetFileUrl? state.photoTweetFileUrl : '',
      tweets: state.tweetMessage,
      likes: [],
      retweets: 0,
      comment: [],
      time: Timestamp.fromDate(new Date()),
    };
    addDoc(collection(db, "tweets"), obj).catch((err) => {
      state.loading = false;

      console.log(err);
    });
    
    const colRef = collection(db, "tweets");
    const q  = query(colRef, orderBy('time', "desc"))

    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        let tweet = state.tweets;
        let newTweet = tweet.find((item) => item.id === doc.id);
        if (newTweet === undefined || newTweet === null) {
          state.tweets.push({ ...doc.data(), id: doc.id });
        }
      });
      state.loading = false;
      state.tweetMessage = ''
      state.youCanTweet = false
      state.IwantToTweet = false;
      state.photoTweetFileUrl = ''
    });
  },
};
