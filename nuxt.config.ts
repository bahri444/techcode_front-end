// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "e-learning",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width-device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "e-learning" },
        { name: "format-detection", content: "telephone-no" },
      ],
      link: [
        {
          rel: "stylesheet",
          //   href: "https://fonts.googleapis.com/css2?family=Barlow&display=swap",
          href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Oswald:wght@200&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.icon",
        },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.6.4.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
});
