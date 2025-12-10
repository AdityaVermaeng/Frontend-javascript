//Promise.race()
//5.
async function pickApi(url) {
    return fetch(url).then(res => res.json());
}

async function fastestApi() {
    let data = await Promise.race([pickApi("https://dummyjson.com/products"),
        pickApi("https://dummyjson.com/users"),
        pickApi("https://dummyjson.com/posts")
    ]);
    console.log(data);
}
fastestApi();

//6.
async function timeOut(ms) {
    return new Promise((resolve, reject) => setTimeout(() => reject("TimeOut errror"), ms))
}

async function race() {
    const apiCall = fetch("https://dummyjson.com/posts").then(res => res.json());
    let result = await Promise.race([apiCall, timeOut(2000)]).catch(err => console.log(err));
    console.log(result);
}
race();