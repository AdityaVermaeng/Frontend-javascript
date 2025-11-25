//Map method
let arr1 = [3, 5, 7, 9];

// arr1.map((value, ind) => {
//     console.log(value, ind);
// })
// let finalArr = arr1.map((value, ind) => {
//     return value + 8;


// })
// console.log(finalArr); //undefined cause it return the value

//finalArr[11,13,15,17]
let newArr = arr1.map(arr1 => arr1 * 5); //by default return an new array
console.log(newArr);

//array given made square

let m = [10, 33, 22, 12, 23];
let square = m.map(m => m * m);
console.log(square);