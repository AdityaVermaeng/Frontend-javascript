//1. Write an async function getUsers() that fetches user data using async/await.
async function getUsers() {

    try {
        const data = await fetch("https://dummyjson.com/users")
        if (!data.ok) {
            throw new Error("failed to fetch response:" + data.status);
        }
        const result = await data.json()
        console.log(result);
    } catch (err) {
        console.log("ERROR!", err.message);
    }
}
getUsers()

//2. Create a function waitFor2Seconds() that waits for 2 seconds using async/await.
async function waitTime(v, ms) {
    return new Promise(res => setTimeout(() => res("Done waiting"), ms))
}

async function dataTime() {
    const p1 = await waitTime("Hello", 2000)
    console.log("wait 2sec",
        p1);
}
dataTime();


//3. Fetch users first and then posts using async/await. Print 'Both done' after completion.
async function userPosts() {
    const p1 = await fetch("https://dummyjson.com/users");
    const user = await p1.json();
    const p2 = await fetch("https://dummyjson.com/posts")
    const posts = await p2.json();
    // const result = await Promise.allSettled([user, posts]);
    // console.log(result);
    console.log("USers:", user);
    console.log("Posts:", posts);

}
userPosts();