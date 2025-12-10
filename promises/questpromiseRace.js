//Q5.(API BAsed)show which API responds fastest
function checkFastApi(url) {
    return fetch(url).then(res => res.json())
}
Promise.race([checkFastApi("https://dummyjson.com/products"),
    checkFastApi("https://dummyjson.com/users"),
    checkFastApi("https://dummyjson.com/posts")
]).then(fastest => console.log("Fastest API is", fastest))


//Q6.(API based): API timeout using promise.race
function timeout(ms) {
    return new Promise((_, reject) => setTimeout(() => reject("Timeout ERROR"), ms))
}
const apiCall = fetch("https://dummyjson.com/posts").then(res => res.json())
Promise.race([apiCall, timeout(2000)]).then(result => console.log(" Result", result)).catch(err => console.log("Race result", err))


//Q7.Timer race 
function race(t, v) {
    return new Promise(res => setTimeout(() => res(v), t))
}
Promise.race([race(2000, "A"), race(1000, "B"), race(5000, "C")]).then(result => {
    console.log("WINNER", result);
})

//Q8.Race with rejection
const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("Ok"), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("ERR2"), 500))
Promise.race([p1, p2]).then(result => console.log("resolve", result)).catch(err => console.log("Rejection", err))