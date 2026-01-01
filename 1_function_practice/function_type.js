// function expression
let multiply = function(a, b = 9) {
    return a * b;
};
// multiply(5, 7);
console.log(multiply(4));



//Arrow function
let add = (p, q) => p + q;
console.log(add(3, 9))