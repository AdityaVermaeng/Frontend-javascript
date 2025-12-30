function student(name, age, addresss) {
    return {
        stdName: name,
        age: age,
        addresss: addresss,
        isPassed: true,
        aboutMe: function() {
            console.log(`Hello my name is ${this.stdName} I am ${this.age} old. i am from ${this.addresss} `);
        }
    }
}
let user1 = student("Aditya", 22, "Delhi");
let user2 = student("Anshu", 21, "banaras");
user1.aboutMe();
user2.aboutMe();