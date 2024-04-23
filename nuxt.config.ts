// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@sidebase/nuxt-auth",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  auth: {
    provider: {
      type: "authjs",
    },
    globalAppMiddleware: true,
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
});
