// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  // hooks: {
  //   ready: (ctx) => console.log(ctx),
  // },
  // WE can define the title and the description for all the pages by using this app attribute in this file
  // app: {
  //   head: {
  //     title: "Nuxt is soo good",
  //     meta:[
  //       {
  //         name: "description",
  //         content:
  //         "This is a very good framework"
  //       }
  //     ] 
  //   }
  // },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  modules:[
    "@nuxt/content","@pinia/nuxt"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
