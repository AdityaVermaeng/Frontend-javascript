1️⃣ Simple Function
function greet() {
    console.log("Hello, Aditya!");
}
greet();

2️⃣ Function with Parameters
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

3️⃣ Function with User Input
let prompt = require("prompt-sync")();

function square(num) {
    return num * num;
}

let n = Number(prompt("Enter number: "));
console.log(square(n));

🔹 LEVEL 2: Function Types (Interview Important)
4️⃣ Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));

5️⃣ Arrow Function
const divide = (a, b) => a / b;
console.log(divide(10, 2));

6️⃣ Default Parameters
function welcome(name = "Guest") {
    console.log("Welcome", name);
}
welcome();
welcome("Aditya");

🔹 LEVEL 3: Logic Building Practice 🔥
7️⃣ Even or Odd
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(10));

8️⃣ Factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

9️⃣ Count Digits
function countDigits(num) {
    return num.toString().length;
}
console.log(countDigits(12345));

🔹 LEVEL 4: Array + Function (Very Important)
🔟 Sum of Array
function arraySum(arr) {
    let sum = 0;
    for (let val of arr) {
        sum += val;
    }
    return sum;
}
console.log(arraySum([1, 2, 3, 4]));

1️⃣1️⃣ Find Max
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([10, 50, 20]));

🔹 LEVEL 5: Real-World Style Functions (MERN Ready 🚀)
1️⃣2️⃣ Validate Email
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}
console.log(isValidEmail("test@gmail.com"));

1️⃣3️⃣ Calculate Total Price
function calculateTotal(price, qty) {
    return price * qty;
}
console.log(calculateTotal(499, 2));