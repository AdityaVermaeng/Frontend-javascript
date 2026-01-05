//singleTon object with class(ES6 style)
class Logger {
    constructor(name) {
        if (Logger.instance) {
            return Logger.instance;
        }
        this.name = name;
        Logger.instance = this;
    }
    log(greetType) {
        console.log(`${greetType} ${this.name}`);
    }
}
const logger1 = new Logger("Aditya");
const logger2 = new Logger("Anshu");
logger1.log("Hello");
logger2.log("Namste");
console.log(logger1 === logger2);