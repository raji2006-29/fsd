class BankAccount {
    accountHolder: string;
    accountBalance: number;

    constructor(accountHolder: string, accountBalance: number) {
        this.accountHolder = accountHolder;
        this.accountBalance = accountBalance;
    }

    deposit(depositAmount: number): void {
        this.accountBalance += depositAmount;
        console.log("Deposited:", depositAmount);
    }

    withdraw(withdrawAmount: number): void {
        if (withdrawAmount <= this.accountBalance) {
            this.accountBalance -= withdrawAmount;
            console.log("Withdrawn:", withdrawAmount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Current Balance:", this.accountBalance);
    }
}

let accountObject = new BankAccount("Rajya Lakshmi", 10000);

accountObject.deposit(3000);
accountObject.withdraw(2000);
accountObject.displayBalance();