function BankAccountInfo(holderName, balance = 0) {
    this.holder = holderName;
    this.balance = balance;
}
BankAccountInfo.prototype.deposite = function(balance) {
    this.balance += balance;
    // console.log(this);
}
BankAccountInfo.prototype.withdraw = function(balance) {
    this.balance -= balance;
}
let user1 = new BankAccountInfo("Aditya", 500);
// console.log(user1);
user1.deposite(300);
console.log(user1)