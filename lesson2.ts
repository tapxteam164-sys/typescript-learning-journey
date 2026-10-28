function greet():void{
    console.log("Hello, Abdulsamad")
}
greet()

function greetMe( name:string):void{
    console.log(`Hello ${name} !`)
}

greetMe("samad");

function greetUser(name:string):void {
    console.log(`Welcome ${name}!`)
}
 greetUser("Halimah");

 let result:number;
 function multiplyNumbers ( x:number, y:number): number {
    result = x*y;
    console.log(result)
    return result
 }

 multiplyNumbers(7,8)

let approximateBirthYear:number;
 function calculateBirthYear(age:number):number{
    approximateBirthYear = 2026-age;
    return approximateBirthYear;
 }

 console.log(calculateBirthYear(20));

 let discountPrice:number;
 function calculateDiscount(amount:number, discount:number):number{
   discountPrice= (amount/100)*discount;

    return amount-discountPrice;
 }

 console.log(calculateDiscount(100000, 10));