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
aadi.deposite(99);
// console.log("Amount deposite successfully", aadi.balance);
aadi.checkBalance();
aadi.withdraw(1050);
aadi.withdraw(50);