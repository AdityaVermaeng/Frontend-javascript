// function expression
let multiply = function(a, b = 9) {
    return a * b;
};
// multiply(5, 7);
console.log(multiply(4));



//Arrow function(ES6)
let add = (p, q) => p + q;
console.log(add(3, 9));

//Annonymous function(function without name)
setTimeout(function() {
    console.log("Hello");
}, 1000);

//Named function expression(expression with function name)
const greet = function hello() {
    console.log("Hi");
};
greet();