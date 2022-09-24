// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-expect-error defineNuxtConfig is not globally known.
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'firebase'
  }
});
