let a = [2, 4];
const b = [5, 7];
let finalArr = [...a, ...b]
console.log(finalArr); //2,4,5,7
//if we want to add some value in arr a then we just copy 1st arr and then add value
a = [24, ...a, 56];
console.log(a); //[24,2,4,56]

//
const x = [10, 20, 30, 40, 50];
let [first, ...rest] = x;
console.log(first); //10
console.log(rest); //[20,30,40,50]