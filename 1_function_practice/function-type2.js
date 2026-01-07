//callback function
function greetUser(name, callback) {
    callback(name);
}

greetUser("Aditya", function(name) {
    console.log("Welcome " + name);
});

//High-Order function
function operation(a, b, fn) {
    return fn(a, b);
}

console.log(operation(2, 3, add));



//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let p1 = Person("Anshu", 21)
console.log(p1)