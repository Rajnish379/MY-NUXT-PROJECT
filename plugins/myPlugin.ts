export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("app:created", () => {
        console.log("hello from plugin");
    })
    // return {
    //     provide: {
    //         sayHello: (msg: string) => console.log(`Hello ${msg}`),
    //     },


});