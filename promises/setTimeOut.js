setTimeout(() => {
    console.log("Hello Students")
}, 4000)


//timeout
function timeOut(value, ms) {
    return new Promise(res => setTimeout(() => res(value), timeout))
}
const q1 = wait(300, "A"); //resolve after 300ms
const q2 = wait(100, "B"); //resolve after 100ms
const q3 = wait(200, "C"); //resolve after 200ms
Promise.race([q1, q2, q3]).then(r => console.log("Here are the result:", r))
    .catch(err => console.log("ERROR IS:", err))