//Map-createa new array with the result of some operation. the value its callback returns are used to form new array
// arr.map(callbackfnx(value,index,array))

// let newArr = arr.map((val) => {
//     return val * 2;
// })

let nums = [67, 65, 89, 76, 45, 34, 15, 32, 63];
nums.map((val) => {
    console.log(val);
});
let newArr = nums.map((val) => {
    // return val;
    return val * val;
});
console.log(newArr);

//filter method-creates a new array of elements that give  true for a condition
let num1 = [67, 65, 89, 76, 45, 34, 15, 32, 63];
let newArr1 = num1.filter((val) => {
    return val > 50;
})
console.log(newArr1);