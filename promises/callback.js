//synchronous code
console.log("task1 ");
console.log("task2 ");
console.log("task3 ");

//Asynchonous code
// console.log("task1 ");
// setTimeout(() => {
//     console.log("task2 ");
// }, 3000)

// console.log("task3 ");

//callback hell //nested callbacks
setTimeout(() => {
        console.log("task2 ");
        setTimeout(() => {
            console.log("task3 ");
            setTimeout(() => {
                console.log("task1");
                setTimeout(() => {
                    console.log("task0");
                }, 4000)
            }, 5000)
        }, 2000)

    }, 3000) //before the promise we use this callback hell