export const state = () => ({
theme:true,
loggedIn: true
  })

  export const mutations = {
    toggleTheme(state,payload) {
      state.theme = payload
    }
  }