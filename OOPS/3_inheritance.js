class Car {
    constructor(brand, color) {
        this.carName = brand;
        this.carColor = color;
    }
    start() {
        console.log(`${this.carName} is starting......`)
    }
    stop() {
        console.log(`${this.carName}  is stoping.......`)
    }
}
// class ElectricCar {
//     constructor(brand, color) {
//         this.carName = brand;
//         this.carColor = color;
//     }
//     start() {
//         console.log(`${this.carName} is starting......`)
//     }
//     stop() {
//         console.log(`$ { this.carName }is stoping.......`)
//     }
//     charging() {
//         console.log(`${this.carName} is charging.......`)
//     }
// }



//......we can uselike this but this seems more complex and more line of codes written
//to avoid this code written inheritance comes in to the use it reuse the class using (extend )key word and provide all the property of existing class to the new class (derived class).........



class ElectricCar extends Car {
    constructor(brand, color, battery) {
        super(brand, color)
        this.battery = battery
    }
    charging() {
        console.log(`${this.carName} is charging.......`)
    }
}
let tesla = new ElectricCar("tesla", "black", 98);
console.log(tesla);
tesla.charging();
tesla.start();
tesla.stop();
console.log(tesla);
let obj1 = new Car("sumo", "blue", 87)
console.log(obj1); //we can make an instannce of the Car class which only contains(brand and color) which consturctor contains the property