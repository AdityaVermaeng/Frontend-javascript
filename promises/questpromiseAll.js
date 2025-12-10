//Q1.  Fetch 3APIs tpgether using promise.all()
// const p1 = fetch("https://dummyjson.com/products")
// const p2 = fetch("https://dummyjson.com/users")
// const p3 = fetch("https://dummyjson.com/posts")
// Promise.all([p1, p2, p3]).then(response => Promise.all(response.map(res => res.json()))).then(data => {
//     console.log("Response from ApI");
//     console.log("Products:", data[0]);
//     console.log("Users:", data[1]);
//     console.log("Posts:", data[2]);
// }).catch(err => {
//     console.log(err);
// })

// function fetchData(url) {
//     return fetch(url).then(res => res.json());
// }
// const p1 = fetch("https://dummyjson.com/products")
// const p2 = fetch("https://dummyjson.com/users")
// const p3 = fetch("https://dummyjson.com/posts")
// Promise.all([p1, p2, p3]).then(result => {
//     console.log("Response from API", result);
// }).catch(err => {
//     console.log("ERROR", err);
// })

//Q2. fetch user and posts together
const userAPI = fetch("https://dummyjson.com/users").then(res => res.json())
const postAPI = fetch("https://dummyjson.com/users").then(res => res.json())
Promise.all([userAPI, postAPI]).then(result => {
    console.log(result);
}).catch(err => { console.log(err); })


//Q3. Execute 3 timed taskes in parallel
function parallelTask(time, value) {
    return new Promise(res => setTimeout(() => res(value)))
}
Promise.all([parallelTask(200, "A"), parallelTask(300, "B"), parallelTask(400, "C")]).then(result => { console.log(result); })

//Q4.  Demonstrate promise.all rejection solution
const p1 = Promise.resolve("Resolve1");
const p2 = Promise.reject("reject 2 or ERROR 2");
const p3 = Promise.resolve("resolve3")
Promise.all([p1, p2, p3]).catch(err => console.log(err))