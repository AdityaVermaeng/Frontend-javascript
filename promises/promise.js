// let data = true;
// let prom = new Promise(function(resolve, reject) {

//     if (data) {
//         resolve("data fetch ....!");
//     } else {
//         reject("something went wrong");
//     }

// })
// console.log(prom);

function getData(data) {
    return new Promise(function(resolve, reject) {
        if (data) {
            resolve("fetch data....!");
        } else {
            reject("something went wrong");
        }
    });

}

// function fullFill(response) {
//     console.log(response);
// }

// function rejection(error) {
//     console.log(error);
// }
// let getProm = getData(true);
// let getProm = getData(false);
// console.log(getProm);
// getData(true).then(fullFill).catch(rejection);
getData(false).then((response) => { console.log(response); }).catch((error) => { console.log(error); });
console.log("hiii"); //cause of asynchronous property "hii " shows at first