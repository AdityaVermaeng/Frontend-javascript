//using Promise.all()
async function fetchApi() {
    const p1 = fetch("https://dummyjson.com/products").then(res => res.json());
    const p2 = fetch("https://dummyjson.com/users").then(res => res.json());
    const p3 = fetch("https://dummyjson.com/posts").then(res => res.json());
    const [products, users, posts] = await Promise.all([p1, p2, p3])
    console.log(products, users, posts);
}
fetchApi()

//2.
// async function userPosts(url) {
async function userPosts() {

    const a1 = fetch("https://dummyjson.com/users").then(res => res.json());
    const a2 = fetch("https://dummyjson.com/posts").then(res => res.json());
    const [users, posts] = await Promise.all([a1, a2]);
    console.log(users, posts);
}
userPosts();

//3.
async function parallelTask(t, v) {
    return new Promise(res => setTimeout(() => res(v)));
}

async function runTask() {
    let task = await Promise.all([parallelTask(200, "P"), parallelTask(300, "Q"), parallelTask(400, "R")]);
    console.log(task);
}
runTask();