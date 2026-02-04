//destructuring of array
const numbers = [1, 2, 3];

const [x, y, z] = numbers;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

//skip value
const arr = [10, 20, 30];

const [a, , c] = arr;

console.log(a); // 10
console.log(c); // 30

//Default value
const arr3 = [5];

const [p, q = 100] = arr3;

console.log(p); // 5
console.log(q); // 100