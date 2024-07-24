// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-24",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  components: true,
});
