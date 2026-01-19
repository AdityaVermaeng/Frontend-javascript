console.log("Start");
setTimeout((cb) => {
    console.log("Inside the callback")

}, 2000);
fetch("https://api.netflix.com").then(function cbF() {
    console.log("Netflix CallBack"); //it takes 2sec to bring response
}).then(function cb() {
    console.log("hii");
});
console.log("End");