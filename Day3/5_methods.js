//Map-createa new array with the result of some operation. the value its callback returns are used to form new array
// arr.map(callbackfnx(value,index,array))

// let newArr = arr.map((val) => {
//     return val * 2;
// })

let nums = [67, 65, 89, 76, 45, 34, 15, 32, 63];
nums.map((val) => {
    // console.log(val);
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

console.log("-- -- -- --Cloning-------- "); //useful for manipulate the new array if we do not want to change the previous array
let arr1 = [12, 34, 56, 78]
let clone = [...arr1] //spread operator used 
console.log(arr1);
console.log(clone);
arr1.push("Iron-man");
console.log(arr1); //cloning of an array with sallow copy
console.log(clone);


//using slice()
let arr2 = [5, 6, 76, 98]
let clone1 = arr2.slice();
console.log(arr2);
console.log(clone1);

arr2.push("hulk");
console.log(arr2);
console.log(clone1);

// new Array by from method

const price = [12, 45, 66, 77, 88];
const clone0 = Array.from(price);
console.log(clone0);
price.push("prince");
console.log(price);
console.log(clone0);


//array inside array
let arr4 = [2, [3, 5]];
// console.log(arr4);
let clone4 = [...arr4];
console.log(clone4);
//[2, [3, 5]];
arr4[1][0] = 8;
console.log(arr4);
console.log(clone4);