//forEach()
const fruits = ["MAngo", "Banana", "orange", "Papaya"];
fruits.forEach((fruits, index) => {
    console.log(`Fruit at index ${index} is ${fruits}`);
})

//

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
user.forEach((obj, inx) => {
    console.log(inx, obj.name, obj.age);
})