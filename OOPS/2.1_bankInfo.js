class BankInfo {
    constructor(holderName, balance = 100) {
        this.holderName = holderName;
        this.balance = balance;
    }
    deposite(balance) {
        this.balance += balance;
    }
}
let manas = new BankInfo("manas", 2000);
manas.deposite(400);
// console.log(manas.balance);
// manas.balance = "hdhhsb d"
console.log(manas); //without abstraction and encapsulation
//here is major problem where user can enter any string we do not encapsulate the entity. and also user can alter the balance