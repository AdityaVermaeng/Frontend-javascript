//Map-createa new array with the result of some operation. the value its callback returns are used to form new array
// arr.map(callbackfnx(value,index,array))

// let newArr = arr.map((val) => {
//     return val * 2;
// })

// let nums = [67, 65, 89, 76, 45, 34, 15, 32, 63];
// nums.map((val) => {
//     console.log(val);
// });
// let newArr = nums.map((val) => {
//     return val;
//     return val * val;
// });
// console.log(newArr);

//filter method-creates a new array of elements that give  true for a condition
// let num1 = [67, 65, 89, 76, 45, 34, 15, 32, 63];
// let newArr1 = num1.filter((val) => {
//     return val > 50;
// })
// console.log(newArr1);

// console.log("-- -- -- --Cloning-------- "); //useful for manipulate the new array if we do not want to change the previous array
// let arr1 = [12, 34, 56, 78]
// let clone = [...arr1] //spread operator used 
// console.log(arr1);
// console.log(clone);
// arr1.push("Iron-man");
// console.log(arr1); //cloning of an array with sallow copy
// console.log(clone);


//using slice()
// let arr2 = [5, 6, 76, 98]
// let clone1 = arr2.slice();
// console.log(arr2);
// console.log(clone1);

// arr2.push("hulk");
// console.log(arr2);
// console.log(clone1);

// new Array by from method

const price = [12, 45, 66, 77, 88];
const clone0 = Array.from(price);
console.log("without change", clone0);
price.push("prince");
console.log(price);
console.log(clone0);


//array inside array
let arr4 = [2, [3, 5]];
// console.log(arr4);
const clone4 = [...arr4];
console.log(clone4);
//[2, [3, 5]];
arr4[1][0] = 8;
console.log(arr4);
console.log(clone4);

//cloning array using map()
const arr8 = [1, 4, 6];
const clone6 = arr8.map(item => item);
console.log(clone6); //[1,4,6]
arr8.push("monu");
console.log(clone6);
console.log(arr8);

//cloning array using filter()
let aRr = [1, 2, 3];
let clOne = aRr.filter(() => true)
console.log(clOne); //[1,2,3]
aRr.push("hero");
console.log(aRr);
console.log(clOne);

// using structureClone(javascript method) for deep copy
let aRR = [2, [5, 7]];
let cLONe = structuredClone(aRR);
aRR[1][0] = 99;
console.log(aRR); //[2,[99,7]]
console.log(cLONe); //[2, [5, 7]]

//using JSON.parse and JASON.stringify()
let arr10 = [4, [6, 9]];
let clone9 = JSON.parse(JSON.stringify(arr10)); // JSON.stringify is  a method which convert obj and array into JSON formate string further JSON.parse again take JSON formate string and again convert into the arr or obj
clone9[1][0] = 67;
console.log(arr10);
console.log(clone9);