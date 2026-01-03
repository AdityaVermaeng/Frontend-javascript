//We provide a simple fuel burn while car is starting
class Car {
    constructor(name) {
        this.name = name;
    }
    fuel = 100;
    burnFuel() {
        this.fuel -= 1;
    }
    start() {
        this.burnFuel();
        console.log(`${this.name} is starting .......`);
    }
}
let tata = new Car("NEXON");
tata.start();
console.log(tata)

// we does not want to show that particular method that show user how much fuel is burned because user what do if he knows that information