class Demo {
    normalMethod() {
        console.log("this is a normal method accessed by the object")
    }
    static staticMethod() {
        console.log("this is a static method aceessed by only class")
    }
}
let obj1 = new Demo();
obj1.normalMethod();
Demo.staticMethod();



//devision of number
class Division {
    static twoNumber(num1, num2) {
        if (num2 !== 0) {
            console.log(num1 / num2);

        } else {
            console.error("can't devided")
        }
    }
}
Division.twoNumber(4, 8);



//system Date and time
class System {
    static getCurrentDate() {
        return new Date().toLocaleDateString();
    }
    static getCurrentTime() {
        return new Date().toLocaleTimeString();
    }
}
console.log(System.getCurrentDate());
console.log(System.getCurrentTime())