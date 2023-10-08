// If we don't use global suffix at the end, the middleware won't be triggered automatically
// We have to specify in each page that we will be going to use this specific middleware
export default defineNuxtRouteMiddleware((to,from)=> {
 
    // //console.log(from);
    // const isLoggedIn = false;
    // // to is the destination
    // console.log(to);
    // if (isLoggedIn) {
    //     // redirect to the page we want to go
    //     return navigateTo(to.fullPath);
    // }
    // // redirect to a login page
    // return navigateTo("/login")
    console.log("efafs")
})