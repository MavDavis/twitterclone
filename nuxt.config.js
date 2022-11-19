
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'twitter',
    script:[
      {src:"https://kit.fontawesome.com/87e2f7b4fa.js",
    crossorigin:"anonymous"
    },
    ],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MavDavis Movie application' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
     '@/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss', 
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-icon',   '@nuxtjs/composition-api/module'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static'
}
// import { defineNuxtConfig } from 'nuxt'

// export default defineNuxtConfig({
// })