function welcomeUser(name?:string):void{
    console.log(`Welcome ${name?? "Guest"}`)
}

welcomeUser()
welcomeUser("Davido")

function calculateTotal(price:number,quantity:number = 1):number{
    return price*quantity;
}

console.log(calculateTotal(5000, 3));
console.log(calculateTotal(5000));

function calculateDiscount(amount: number, discount: number): number {
    if (amount < 0) {
        console.log("Invalid amount");
        return 0;
    }

    if (discount < 0 || discount > 100) {
        console.log("Invalid discount");
        return 0;
    }

    const realDiscount: number = (amount / 100) * discount;

    return amount - realDiscount;
}

console.log(calculateDiscount(100000, 10));
console.log(calculateDiscount(50000, 0));
console.log(calculateDiscount(50000, 100));