function BankAccountInfo(holderName, balance) {
    this.holderName = holderName;
    this.balance = balance;
    this.deposite = function(balance) {
            console.log("deposite:", balance)
        }
        //means it only work to console the deposite 
}
BankAccountInfo.prototype.deposite = function(balance) {
    this.balance += balance;
}
let user1 = new BankAccountInfo("Aditya", 500);
console.log(user1.deposite(500));