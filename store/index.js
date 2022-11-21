export const state = () => ({
theme:true,
loggedIn: false,
userProfile:{
  name:'',
  age:'',
  followers:'',
  following:'',
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
tweets:[]
  })

  export const mutations = {
    toggleTheme(state,payload) {
      state.theme = payload
    }
  }