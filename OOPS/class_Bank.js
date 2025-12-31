function BankAccountInfo(holderName, balance = 0) {
    this.holder = holderName;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
    };

    this.withdraw = function(amount) {
        this.balance -= amount;
    };
}

let user1 = new BankAccountInfo("Aditya", 250);

user1.deposit(200);
// user1.withdraw(200);

console.log(user1);