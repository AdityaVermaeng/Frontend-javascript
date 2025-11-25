//find() method
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
let findAge = user.find((obj) => obj.age > 18); //gives the first match data fullfilled the condition
console.log(findAge);

let member = [10, 3, 56, 67, 98];
let findMember = member.find((value) => value % 3 == 0)
console.log(findMember);