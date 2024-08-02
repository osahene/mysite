// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-24",
  devtools: { enabled: true },
  nitro: {
    preset: "vercel",
    prerender: {
      routes: ["/"],
    },
  },
  app: {
    head: {
      title: "Dave Personal Webste",
    },
    baseURL: "/mysite/",
  },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
