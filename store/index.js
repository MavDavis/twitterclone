export const state = () => ({
theme:true
  })

  export const mutations = {
    toggleTheme(state,payload) {
      state.theme = payload
    }
  }