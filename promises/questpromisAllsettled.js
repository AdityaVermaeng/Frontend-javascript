//Q9....(API based ):show succes andfailure using promise.allSettled
function fetchApi(url) {
    return fetch(url).then(res => res.json())
}
const p1 = fetchApi("https://dummyjson.com/posts")
const p2 = fetchApi("http://invalid-url-123.com").then(response => response.json())
    // .catch(err => console.log(err))
const p3 = fetchApi("https://dummyjson.com/products")
Promise.allSettled([p1, p2, p3]).then(result => console.log("Final Output", result))


//Q10..(API based) compare normal API and slow API using allSettled()
function api(url) {
    return fetch("https://dummyjson.com/posts").then(res => res.json)
}

function slowApi(url) {
    return new Promise(response => setTimeout(() => response("SLOW API"), 5000))
}
Promise.allSettled([api(), slowApi()]).then(r => { console.log(r); })