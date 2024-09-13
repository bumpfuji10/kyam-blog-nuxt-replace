export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/src/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      headlessCmsApiKey: process.env.HEADLESS_CMS_API_KEY
    }
  },
  ssr: true
})
