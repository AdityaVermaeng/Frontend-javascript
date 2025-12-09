const p1 = Promise.resolve("OK");
const p2 = Promise.reject("ERR");
const p3 = new Promise(res => setTimeout(() => res("LATER"), 3000)); //ultimately waited for 3sec to fullfill all the promises
const p4 = new Promise(res => setTimeout(() => res("Hello"), 4000));
Promise.allSettled([p1, p2, p3, p4]).then(results => {
    console.log(results);
})