/**class Car {
    brand: string;
    color: string;

    constructor(brand:string, color:string){
        this.brand = brand;
        this.color = color
    }

    displayInfo():void{
        console.log(`This is a ${this.color} ${this.brand}.`);
    }

    changeColor(newColor: string): void {
        this.color = newColor;
    }
}

const car1 = new Car("Toyota", "Black");
const car2 = new Car("Honda", "White");

console.log(car1.brand);
console.log(car1.color);

console.log(car2.brand);
console.log(car2.color);

car1.changeColor("Blue");

console.log(car1.color);
**/

class Student{
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string){
        this.name = name ;
        this.age = age;
        this.course = course
    }

    introduce():void{
        console.log(`My name is ${this.name}, I am ${this.age} years old, and i study ${this.course}.`)
    }
}

const student1 = new Student ("samad",22,"Full-Stack Development")
const student2 = new Student ("Ada",20,"Frontend Development")

student1.introduce()
student2.introduce()