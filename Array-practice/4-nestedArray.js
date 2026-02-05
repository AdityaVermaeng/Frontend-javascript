const arr = [1, 2, [3, 4, [5]]];

const [a, b, [c, d, [e]]] = arr;

console.log(c); // 3
console.log(d); // 4
console.log(e) //5