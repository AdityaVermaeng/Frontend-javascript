// Class of a Bank where user can deposite and withdraw the amount from account

class BankAcoount {
    constructor(name, balance = 0.00) {
        this.userName = name;
        this.balance = balance;
    }
    deposite(balance) {
        if (balance > 0) {
            this.balance += balance
            console.log(`${balance}rupees:Deposited  `)
            console.log(`Total balance is:${this.balance} ruppes`)

        } else {
            console.error("Plzz enter some amount")
        }

    }
    checkBalance() {
        console.log(`Current Available Balance is:${this.balance}`)
    }
    withdraw(balance) {
        if (balance > this.balance) {
            console.error(`Amount exceeded.....plzz Enter valid amount...`)
        } else {
            this.balance -= balance;
            console.log(`Amount ruppess of :${balance} withdrawal`);
        }
        this.checkBalance()
    }
}
let aadi = new BankAcoount("Aditya", 1000);
// console.log(aadi.balance);
// aadi.deposite(99);
// console.log("Amount deposite successfully", aadi.balance);
// aadi.checkBalance();
// aadi.withdraw(1050);
// aadi.withdraw(50);


//create a class of a SmartPhone (Name,color,price,RAM,Camera,battery,charging)

class SmartPhone {
    constructor(name, color, price, RAM, camera, battery, charging) {
        this.brand = name;
        this.color = color;
        this.price = price;
        this.ram = RAM;
        this.camera = camera;
        this.battery = battery;
        this.charging = charging;

    }
    getInfo() {
        console.log(`brand name is ${this.brand},color is ${this.color},which price is ${this.price}`);
        console.log(`comes with${this.ram}GB RAM,${this.camera}megaPixel and ${this.battery}mAh massive Battery with ${this.charging}watt superfast charger`)
    }
}
let samsung = new SmartPhone("Samsung", "silver", 20500, 8, 32, 4800, 85);
let realme = new SmartPhone("Realme", "black", 24500, 12, 52, 5800, 115);
samsung.getInfo();
realme.getInfo();