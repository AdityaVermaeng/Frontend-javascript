//filter method
const n = [10, 20, 25, 45, 67, 36, 41, 55];
// let filterArray = n.filter((value) => {
//     if (value % 3 == 0) {
//         return true;
//     }
// })
let filterArray = n.filter(n => n % 3 == 0)
console.log(filterArray);

//filter use in object
let user = [{
        name: "Aditya",
        age: 34
    },
    {
        name: "Amit",
        age: 18
    },
    {
        name: "Anubhav",
        age: 17
    },
    {
        name: "Dhananjay",
        age: 12
    },
    {
        name: "gagan",
        age: 54
    }
]
console.log(user);
let filterAge = user.filter((obj) => obj.age >= 18);
console.log(filterAge);