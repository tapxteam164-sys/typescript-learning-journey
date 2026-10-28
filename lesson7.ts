// Objects in TypeScript

type student = {
    name: string;
    age: number;
    course: string;
    isRegistered: boolean
}

const student1: student ={
    name: "Samad",
    age: 22,
    course: "Full-Stack Development",
    isRegistered: true
}

const student2: student ={
    name: "Ada",
    age: 20,
    course: "Frontend Development",
    isRegistered: false
}

console.log(student1.name)
console.log(student2.course)
student2.isRegistered = true;
console.log(student2.isRegistered)