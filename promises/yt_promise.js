//promise
let logIn = true;
let promis = new Promise((resolve, reject) => {
        if (logIn) {
            resolve("login successfully");
        } else {
            reject("invalid userName")
        }
    })
    // console.log(promis);
promis.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})
console.log(promis);

//using function

function getData(status) {
    return new Promise((resolve, reject) => {
        if (status) {
            resolve("you have logged in");
        } else {
            reject("sorry! plz try another password");
        }

    })
}

// function fullFill(response) {
//     console.log(response);
// }

// function rejection(error) {
//     console.log(error);
// }
// getData(true).then(fullFill).catch(rejection)
getData(false).then((response) => {
    console.log(response);

}).catch((error) => {
    console.log(error);
})

//Another promise syntax example

let doneTask = (taskNumber, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("task", taskNumber);
            resolve()
        }, time)
    })
}
doneTask(1, 1000).then((res) => doneTask(2, 3000))
    .then((res) => doneTask(5, 1000))