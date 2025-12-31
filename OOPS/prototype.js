function Student(name, age, address) {

    this.name = name;
    this.age = age;
    this.address = address;

}
Student.prototype.getInfo = function() {
    console.log(`Hello ! everyone my name is ${this.name}, age is ${this.age} and come from ${this.address}`);
}
console.log(Student.prototype)
let m1 = new Student("Sachin", 22, "Bihar");
m1.getInfo();
console.log(m1);