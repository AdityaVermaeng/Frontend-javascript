//count even numbers

let arr = [10, 29, 23, 22, 24, 12, 4, 6];
let count = 0;
for (let val of arr) {
    if (val % 2 == 0) {
        count++;
    }
}
console.log(count);



//prime number
// let arr1 = [11, 23, 34, 45, 13, 17, 19];
// let count1 = 0;
// if (val <= 1) {
//     console.log("Not a prime number")
// } else {
//     for (let val of arr1) {
//         if (val % val === 0) {
//             // console.log("prime ")
//             count1++;
//         }
//     }
// }
// console.log(count1);