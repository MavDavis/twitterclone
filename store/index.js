export const state = () => ({
theme:false
  })

  export const mutations = {
    toggleTheme(state,payload) {
      state.theme = payload
    }
  }