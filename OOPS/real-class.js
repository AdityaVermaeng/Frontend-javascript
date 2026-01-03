class Car {
    constructor(carName, color, speed, mileage) {
        this.carName = carName;
        this.color = color;
        this.speed = speed;
        this.mileage = mileage;
    }
    start() {
        console.log(`${this.carName} is starting.....`)
    }
    stop() {
        console.log(`${this.carName} is stoping.....`)
    }
}
let bmw = new Car("BMW", "blue", 200, 30);
let Toyota = new Car("Toyota", "silver", 170, 30);
let benz = new Car("Benz", "brown", 300, 30);
console.log(bmw);
console.log(Toyota);
bmw.start();