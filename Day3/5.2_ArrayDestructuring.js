//swapping two number using destructuring

let a = 1;
let b = 3;
[a, b] = [b, a]
console.log(a); //3
console.log(b); //1


//another
const arr = [1, 2, 3];
[arr[2], arr[3]] = [arr[1], arr[2]];
console.log(arr) //[1,3,2]