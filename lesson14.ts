interface Person{
    name: string;
    age: number;
}

interface Employee extends Person{
    salary: number;
    position: string;
}

type EmploymentStatus = "full-time" | "part-time" | "contract"

const employee1: Employee = {

    name: "Samad",
    age: 22,
    salary: 250000,
    position: "Full-stack Developer"

}

const status:EmploymentStatus = "full-time";

console.log(`Name is ${employee1.name} and i'm ${employee1.position} and my status is ${status} `)