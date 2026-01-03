class Car {
    constructor(name) {
        this.name = name;
        this._fuel = 100;
    }

    _burnFuel() {
        this._fuel--;
    }

    start() {
        this._burnFuel();
        console.log(`${this.name} is starting`);
    }
}
let tata = new Car("NEXON");
tata.start();
// tata._burnFuel()
console.log(tata)