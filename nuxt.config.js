
module.exports = {
  srcDir: "client",
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Home",
    titleTemplate:"MyNuxt| %s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:  "my test ssr"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/RegisterModule"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/router"],
  routerModule:{
    fileName: "router"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
