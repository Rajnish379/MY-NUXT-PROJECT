export default defineEventHandler((event)=> {
    console.log(event);
    return {
        api: 'works',
    };
})

// Always specify the type of method using the suffix after the file name
// If you don't specify it it will be an app.all which means it accepts each and every type of request, i.e., get,post,put,delete