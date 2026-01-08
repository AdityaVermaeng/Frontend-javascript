//default parameter

// function addNum(a, b) {
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }
// console.log(addNum(5, 8));
// console.log(addNum(5))//old method

//new method
function addNum(a, b = 1) {

    return a + b;
}
console.log(addNum(5)) //6



//......Rest parameter.......
// function numbers(a, b, c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// numbers(2, 3, 5, 6, 7);


function numbers(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `, c);
}
numbers(2, 3, 5, 6, 7, 8, 9, 3);


//numbers addition
function addNumbers(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
const result = addNumbers(3, 4, 5, 6, 7, 8, 9);
console.log(result);