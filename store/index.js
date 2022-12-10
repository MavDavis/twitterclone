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
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import { async } from "@firebase/util";
export const state = () => ({
  theme: true,
  newChatId: null,
  photoTweetFileUrl: "",
  whoToFollow: [],
  photoFileName: "",
  sidebarSide: false,
  loggedIn: false,
  IwantToTweet: false,
  youCanTweet: false,
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
  async follow(state, payload) {
    const follow = doc(db, "User", payload);
    const followDocSnap = await getDoc(follow);
    const followingDoc = doc(db, "User", state.userProfile.id);
    const followingDocSnap = await getDoc(followingDoc);
    let newFollowing = followingDocSnap
      .data()
      .following.find((person) => payload === person.id);
    if (!newFollowing) {
      await updateDoc(followingDoc, {
        following: [...followingDocSnap.data().following, followDocSnap.data()],
      });
      state.userProfile.following = [
        ...followingDocSnap.data().following,
        followDocSnap.data(),
      ];
    } else {
      let updatedFollowing = followingDocSnap
        .data()
        .following.filter((person) => person.id !== followDocSnap.data().id);
      await updateDoc(followingDoc, {
        following: updatedFollowing,
      });
      state.userProfile.following = updatedFollowing;
    }
    let newFollower = followDocSnap
      .data()
      .followers.find((person) => person.id === state.userProfile.id);
    let updateLocalFollower = state.whoToFollow.find(
      (item) => item.id === payload
    );

    if (!newFollower) {
      let data = followDocSnap.data().followers;
      await updateDoc(follow, {
        followers: [...data, state.userProfile],
      });
      // state.whoToFollow.followers = [...state.whoToFollow, updateLocalFollower]
      updateLocalFollower.followers = [
        ...updateLocalFollower.followers,
        state.userProfile,
      ];
    } else {
      let data = followDocSnap.data().followers;
      let newData = data.filter((person) => person.id !== state.userProfile.id);
      updateLocalFollower.followers = updateLocalFollower.followers.filter(
        (person) => person.id !== state.userProfile.id
      );
      await updateDoc(follow, {
        followers: newData,
      });
    }
  },
  updateUser(state, payload) {
    state.userProfile = payload;
  },
  async likeTweet(state, payload) {
    const like = doc(db, "tweets", payload);
    let stateTweet = state.tweets.find((item) => item.id === payload);

    const docSnap = await getDoc(like);
    let obj = {
      name: state.userProfile.Fullname,
      id: state.userProfile.id,
      liked: true,
    };
    let newLike = docSnap
      .data()
      .likes.find((item) => item.id === state.userProfile.id);
    if (newLike === undefined || newLike == null) {
      await updateDoc(like, {
        likes: [...docSnap.data().likes, obj],
      });
      let confirmStateTweetLiked = stateTweet.likes.find(
        (item) => item.id == obj.id
      );
      if (
        newLike === confirmStateTweetLiked ||
        confirmStateTweetLiked == null
      ) {
        stateTweet.likes = [...stateTweet.likes, obj];
      }
      console.log(state.tweets, stateTweet);
    } else {
      let newObj = docSnap
        .data()
        .likes.filter((item) => item.id !== newLike.id);
      stateTweet.likes = stateTweet.likes.filter((item) => item.id !== obj.id);
      await updateDoc(like, {
        likes: newObj,
      });
    }
  },
  ckeckfortweetMessage(state) {
    if (state.tweetMessage.length > 0) {
      state.youCanTweet = true;
    } else if (
      state.photoTweetFileUrl != null ||
      state.photoTweetFileUrl != ""
    ) {
      state.youCanTweet = true;
    } else {
      state.youCanTweet = false;
    }
  },
  filenameChanged(state, payload) {
    state.photoFileName = payload;
  },
  createFileUrl(state, payload) {
    state.photoTweetFileUrl = payload;
    state.loading = true;
    let user = state.userProfile;
    if (state.tweetMessage.length > 0) {
      state.youCanTweet = true;
    } else if (!!state.photoTweetFileUrl) {
      state.youCanTweet = true;
      const imgRef = ref(storage, `documents/${state.photoFileName}`);

      uploadBytes(imgRef, state.photoTweetFileUrl)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");
        })
        .then(() => {
          getDownloadURL(imgRef).then((downloadURL) => {
            state.photoTweetFileUrl = downloadURL;
            state.loading = false;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      state.youCanTweet = false;
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
          state.loading = false;
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
            followers: [],

            following: [],
            id: user.id,
            chats: [
              {
                Fullname: "Admin",
                Username: "Mavdavis",
                userId: 0,
                message: [
                  { userId: 0, message: "hy", time: new Date },
                  {
                    userId: 0,
                    message: "Good day. How are you doing?",
                    time: new Date,
                  },
                  {
                    userId: user.id,
                    message: "I am good and you?",
                    time: new Date,
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
                  { userId: 2, message: "hy", time: new Date },
                  {
                    userId: 2,
                    message: "Do you have those papers ready?",
                    time: new Date,
                  },
                  {
                    userId: user.id,
                    message: "Not yet, It will be ready soon.",
                    time: new Date,
                  },
                  { userId: 2, message: "Okay", time: new Date },
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
          followers: [],
          age: "",
          following: [],
          id: user.uid,
          chats: [
            {
              Fullname: "Admin",
              Username: "Mavdavis",
              userId: 0,
              message: [
                { userId: 0, message: "hy", time: new Date },
                {
                  userId: 0,
                  message: "Good day. How are you doing?",
                  time: new Date,
                },
                {
                  userId: user.uid,
                  message: "I am good and you?",
                  time: new Date,
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
                { userId: 2, message: "hy", time: new Date },
                {
                  userId: 2,
                  message: "Do you have those papers ready?",
                  time: new Date,
                },
                {
                  userId: user.uid,
                  message: "Not yet, It will be ready soon.",
                  time: new Date,
                },
                { userId: 2, message: "Okay", time: new Date },
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
      let username = state.userProfile.Username;
      username =
        username.slice(0, 1).toUpperCase() + username.slice(1, username.length);
      state.userProfile.Username = username;
      const colRef = collection(db, "tweets");
      const q = query(colRef, orderBy("time", "desc"));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          let tweet = state.tweets;
          let newTweet = tweet.find((item) => item.id === doc.id);
          if (newTweet === undefined || newTweet === null) {
            state.tweets.push({ ...doc.data(), id: doc.id });
          }
        });
      });
      const secondColRef = collection(db, "User");
      onSnapshot(secondColRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          let checkFortheExistenceOfUser = state.whoToFollow.find(
            (item) => item.id === doc.id
          );
          if (!checkFortheExistenceOfUser) {
            state.whoToFollow.push(doc.data());
          }
          state.whoToFollow = state.whoToFollow.filter(
            (item) => item.id !== state.userProfile.id
          );
        });
      });
      const thirdColRef = collection(db, "Chats");
      onSnapshot(thirdColRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          let name = state.userProfile.id;
          const pattern = new RegExp(`${name}`);
          if (pattern.test(doc.data().name)) {
            // push chats to
            // console.log(doc.data());
          } else {
          }
          return;
        });
      });
    } else {
      console.log("No such document!");
    }
  },
  async addChat(state, payload) {
    let myId = state.userProfile.id;
    let myAccount = state.userProfile;
    let myFriendId = payload.id;
console.log(myAccount.id,payload.id);
    const myFriend = doc(db, "User", myFriendId);
    const fetchMyFiend = await getDoc(myFriend);
    const Myself = doc(db, "User", myId);
    const fetchMyself = await getDoc(Myself);
    let checkIfIexistInMyfriendsChat = fetchMyFiend
      .data()
      .chats.find((item) => item.userId === myId);
    if (!checkIfIexistInMyfriendsChat) {
      await updateDoc(myFriend, {
        chats: [
          ...fetchMyFiend.data().chats,
          {
            Fullname: myAccount.Fullname,
            Username: myAccount.Username,
            userId: myAccount.id,
            chatId: (`${myAccount.id}${payload.id}`),
            message: [],
            img: myAccount.profileImage,
          },
        ],
      });
      state.newChatId = myId;
    } else {
      state.newChatId = myId;
    }
    let checkIfMyFrienExistInMyChat = fetchMyself
      .data()
      .chats.find((item) => item.userId === myFriendId);
    if (!checkIfMyFrienExistInMyChat) {
      await updateDoc(Myself, {
        chats: [
          ...fetchMyself.data().chats,
          {
            Fullname: payload.Fullname,
            Username: payload.Username,
            userId: payload.id,
            chatId: (`${myAccount.id}${payload.id}`),
            message: [],
            img: payload.profileImage,
          },
        ],
      });
      state.newChatId = myFriendId;
    } else {
      state.newChatId = myFriendId;
    }
    onSnapshot(doc(db, "User", myId), (doc) => {
      state.userProfile = doc.data();
    });
  },
  TweetAMessage(state) {
    state.loading = true;
    let user = state.userProfile;
    let obj = {
      Fullname: user.Fullname,
      Username: user.Username,
      id: user.id,
      userImg: user.profileImage,
      img: state.photoTweetFileUrl ? state.photoTweetFileUrl : "",
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
    const q = query(colRef, orderBy("time", "desc"));

    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        let tweet = state.tweets;
        let newTweet = tweet.find((item) => item.id === doc.id);
        if (newTweet === undefined || newTweet === null) {
          state.tweets.push({ ...doc.data(), id: doc.id });
        }
      });
      state.loading = false;
      state.tweetMessage = "";
      state.youCanTweet = false;
      state.IwantToTweet = false;
      state.photoTweetFileUrl = "";
    });
  },
  async sendMessage(state, payload) {
    let myId = state.userProfile.id;
    let myAccount = state.userProfile;
    let myFriendId = payload.userId;

  
    let func = async (id) => {
      const myFriend1 = doc(db, "User", id);
      const fetchMyFiend1 = await getDoc(myFriend1);
      let name = (`${myId}${myFriendId}`);
      let name2 =(`${myFriendId}${myId}`);
      const pattern = new RegExp(name);
      const pattern2 = new RegExp(name2);
      fetchMyFiend1.data().chats.forEach(item =>{
   if ((pattern.test(`${item.chatId}`)) ) {
console.log(item);
   }
  })
    };
   func(myId);
   func(myFriendId);
    // await updateDoc(myFriend1, {
    //   chats: [...fetchMyFiend1.data().chats,   {
    //     Fullname: myAccount.Fullname,
    //     Username: myAccount.Username,
    //     userId: myAccount.id,
    //     message: [

    //     ],
    //     img: myAccount.profileImage,
    //   },],
    // })
  },
};
