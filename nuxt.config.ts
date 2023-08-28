// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/style.scss" as *;'
        }
      }
    }
  },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          download:true,
          Dosis: {
            wght: [100, 200, 300,400,500,600,700,800],
            ital: [100, 200, 300,400,500,600,700,800],
          },
        }
    }],
  ],
})
