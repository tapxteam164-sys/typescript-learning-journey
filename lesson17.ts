interface Customer{
    name: string;
    email: string;
    phone?: string;
}

const customer: Customer = {
    name:"samad",
    email:"samad@gmail.com",
}

console.log(customer?.phone)

console.log(customer.phone??"No phone provided")