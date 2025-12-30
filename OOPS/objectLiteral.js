let student = {
    stdName: "Aditya",
    age: 22,
    addresss: "Noida",
    isPassed: true,
    aboutMe: function() {
        console.log(`Hello my name is ${this.stdName} I am ${this.age} old. i am from ${this.addresss} `);
    }
}
student.aboutMe();