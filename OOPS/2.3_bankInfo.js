//get and set the balance
class BankInfo {
    _balanace = 100; //private
    constructor(name, balance) {
        this.holderName = name;
        this._balance = balance;
    }
    deposite(balance) {
        this._balance += balance;
    }
    set Balance(balance) {
        if (isNaN(balance)) {
            console.error("invalid balance");
            return;
        }
        console.log(`Balance is set successfully`)
        this._balance += balance
    }
    get Balance() {
        return this._balance;
    }
}
let user1 = new BankInfo("Anshu", 500);
// console.log(user1)
// user1.setBalance(500);
// user1.setBalance('hudbdhjn');
// console.log(user1.getBalance())
user1.Balance = 999;
// user1.Balance = "hidbuubjjd";
console.log(user1.Balance);