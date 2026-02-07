function Student(name1, age, address) {
    this.name1 = name1;
    this.age = age;
    this.address = address;
    getInfo = function() {
        console.log(`My name is ${this.myName}. I am ${this.age}. I am from${this.address}`)
    }
}
obj1 = new student("Aditya", 21, "Noida");
obj2 = new student("Anshu", 21, "Noida18")
obj1.getInfo();
obj2.getInfo();