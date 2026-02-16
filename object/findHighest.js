let marks = {
    math: 80,
    english: 92,
    science: 75
};

let values = Object.values(marks);
let max = Math.max(...values);

console.log(max); // 92