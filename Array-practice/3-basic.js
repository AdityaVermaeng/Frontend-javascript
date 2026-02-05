//Rest operator
const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first); // 1
console.log(rest); // [2,3,4,5]

// Function return destructuring
function getUser() {
    return ["Aditya", 22];
}

const [name, age] = getUser();

console.log(name); // Aditya
console.log(age); // 22