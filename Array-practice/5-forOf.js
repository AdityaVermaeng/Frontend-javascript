// let arr = [10, 20, 30, 40];
// for (let item of arr) {
//     console.log(item);
//     // console.log(lengthOf(item));
// }


//sum of array using for of
let arr1 = [20, 40, 54, 33, 23, 25];
var sum = 0;
for (let num of arr1) {
    sum += num;
}
console.log(sum);


// find largest number
let arr2 = [20, 40, 54, 33, 23, 25];
let max = arr2[0];
for (let val of arr2) {
    if (val > max) {
        max = val;
    }
}
console.log(max);