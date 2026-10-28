class BankAccount {
    public owner: string;
    private balance: number;

    constructor(owner: string, balance: number){
        this.owner = owner;
        this.balance = balance;
    }

    public deposit(amount: number):void{

        if(amount>0){
            this.balance += amount;
        }else{
            console.log("Invaild deposite amount")
        }
    }

    public withdraw(amount: number):void{
        if(amount > 0 && amount < this.balance){
            this.balance -= amount
        }else{
            console.log("Invaild withdraw")
        }
    }

    public showBalance():void{
        console.log(`Account Balance is ${this.balance}`)
    }
}

const account1 = new BankAccount("Samad", 10000);

account1.deposit(2000);
account1.withdraw(3000);
account1.showBalance();