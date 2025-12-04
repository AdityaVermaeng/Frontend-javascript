// function wait(ms, value) {
//     return new Promise(resolve => setTimeout(() => {
//         resolve(value), ms
//     }))
// }
// const p1 = wait(300, "A"); //resolve after 300ms
// const p2 = wait(100, "B"); //resolve after 100ms
// const p3 = wait(200, "C"); //resolve after 200ms
// Promise.all([p1, p2, p3]).then(results => {
//     console.log(results);
// }).catch(error => {
//     console.log("ERROR:", error);
// })


//
// function wait(ms, value) {
//     return new Promise((resolve, rejeect) {
//         setTimeout(function() {
//             return
//         })
//     })
// }





//sort form when a API failed to bring the data
const p1 = new Promise((resolve) => setTimeout(() => resolve("OK2"), 300));
const p2 = new Promise((_, reject) => setTimeout(() => reject("ERR2"), 300));
const p3 = new Promise((resolve) => setTimeout(() => resolve("OK3"), 300));
Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.error("ERROR is:", err));