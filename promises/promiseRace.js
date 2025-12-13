function wait(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms))
}
const q1 = wait(300, "A"); //resolve after 300ms
const q2 = wait(100, "B"); //resolve after 100ms
const q3 = wait(200, "C"); //resolve after 200ms
Promise.race([q1, q2, q3]).then(results => {
    console.log("Race resolved with:", results); //result B
}).catch(error => {
    console.log("Race rejcted with:", error);
})

//
const p1 = new Promise((resolve) => setTimeout(() => resolve("OK"), 300));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Race Resolved with:"), 100));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Ok3"), 200))
Promise.race([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.error("Error is:", err));

//