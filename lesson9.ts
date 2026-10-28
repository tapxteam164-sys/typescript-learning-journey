interface Product {
    name: string;
    price: number;
    category: string;
    inStock: boolean
}

const products: Product[] = [
    {
        name: "Laptop",
        price: 500000,
        category: "Electronics",
        inStock: true
    },

    {
        name: "phone",
        price: 250000,
        category: "Electronics",
        inStock: false
    },

    {
        name: "Chair",
        price: 50000,
        category: "Furniture",
        inStock: true
    }
]

console.log(products[0]?.name)

for (const product of products) {
    console.log(product.name)
}

console.log(products.find((product) => product.name === "phone"))

const newProduct: Product[] = products.filter((product) => product.inStock === true);

console.log(newProduct)

function findProduct (name: string): Product | undefined {
   return products.find((product) => product.name === name)
}

console.log(findProduct("Laptop"));
console.log(findProduct("Tablet"));