interface Employee {
    name: string;
    age: number;
    position: string;
    salary: number;
    isFullTime: boolean;
    phone?: string
}

const Employee1: Employee = {
    name: "Samad",
    age: 22,
    position: "Junior Developer",
    salary: 250000,
    isFullTime: true,
    phone: "09156430616"
}

const Employee2: Employee = {
    name: "Ade",
    age: 25,
    position: "UI Developer",
    salary: 300000,
    isFullTime: false,
}


console.log(Employee1.name)
console.log(Employee2.position)
Employee2.salary+=50000
console.log(Employee2.salary)
console.log(Employee1.phone)