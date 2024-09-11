// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      headlessCmsApiKey: process.env.HEADLESS_CMS_API_KEY
    }
  }
})
