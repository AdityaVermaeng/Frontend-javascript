function Student(name, age) {
    this.name = name
    this.age = age
    this.getName = function() {
        console.log(`hello ${this.name} and age is ${this.age}`)
    }
    this.getData = function() {
        console.log(this)
    }
}
let obj1 = new Student("keshav", 21)
let obj2 = new Student("Neha", 21)
obj1.getData();
obj2.getData();
obj1.getName();
obj2.getName();