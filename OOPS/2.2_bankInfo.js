class BankInfo {
    _balance = 100;
    constructor(name, balance) {
        this.holderName = name;
        this._balance = balance;
    }
    deposite(balance) {
        this._balance += balance;
    }
}
let aditya = new BankInfo("ADITYA", 300);
aditya._balance = 1234;
console.log(aditya);