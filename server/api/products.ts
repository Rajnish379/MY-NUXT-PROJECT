import data from "./products.json";

// export default defineEventHandler(async () => {
//     return new Promise<any>((resolve)=> {
//         setTimeout(() => {
//             resolve(data);
//         },2000);
//     });
// });

let productCount = 0;

setInterval(() => {
    productCount++;
},1000)

export default defineEventHandler(() => {
    return {
        productCount,
    };
});