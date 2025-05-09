import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig:{
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:8000', // Cấu hình API base URL
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  plugins: [
    '~/plugins/axios.ts'
  ],
})
