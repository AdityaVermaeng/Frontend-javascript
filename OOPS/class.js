// class syntax(es6)

// class Student {
//     myName = 'Aditya';
//     age = 23;
//     address = "noida"
//     getInfo() {
//         console.log(`hii ! everyone `)
//     }
// }
// let m1 = new Student();
// console.log(m1)
// console.log(m1.getInfo())



//class always uses constructor function which initialize and pass the value to arguments
class Student1 {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.getInfo = function() {
            console.log(`Hello ! everyone my name is ${this.name}, age is ${this.age} and come from ${this.address}`)
        }
    }

}
let obj1 = new Student1("Aditya", 21, "Noida");
let obj2 = new Student1();
console.log(obj1);
// obj1.getInfo()
console.log(obj2);
// console.log(obj2.getInfo());