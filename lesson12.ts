class Animal{
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal{
    public breed: string;

    constructor(name: string, breed: string){
        super(name);
        this.breed = breed;
    }

    bark(): void{
        console.log(`${this.name} says woof!`)
    }
}

const dog1 = new Dog ("Buddy", "German Shepherd")
const dog2 = new Dog ("Max", "Labrador")

dog1.eat();
dog1.bark();

console.log(dog1.breed);

dog2.eat();
dog2.bark();