//Given anarray of numbers return a new array with each  number doubled
const num = [2, 4, 5, 7, 8];
let newArray = num.map(num => num * 2)
console.log(newArray);

//filer all even number
const number = [11, 23, 42, 22, 32, 15, 17, 18, 6];
let evenNum = number.filter((value) => value % 2 == 0);
console.log(evenNum);

//Find the first student with marks less than 35
const student = [{
        name: "Amit",
        marks: 30
    },
    {
        name: "Ansh",
        marks: 60
    },
    {
        name: "suraj",
        marks: 35
    },
    {
        name: "ajit",
        marks: 45
    },
    {
        name: "Ankit",
        marks: 50
    },
    {
        name: "Amit",
        marks: 35
    },
]
let findMarks = student.find((value) => value.marks < 35);
console.log(findMarks);