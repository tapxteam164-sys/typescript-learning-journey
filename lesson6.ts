// Arrays and Array Methods in TypeScript

//include method
const products: string[] = ["Laptop", "Phone", "Tablet"];
console.log(products.includes("Laptop"))

//without map method
const prices: number[] = [1000, 2000, 3000];
const updatePrice: number[] = []
for (const price of prices) {
    updatePrice.push(price*2)
}
console.log(updatePrice)

//with map method
const prices2: number[] = [1000, 2000, 3000];
const updatePrice2: number[] = prices2.map((price: number):number => {
    return price * 2;
})

// filter method
const ages: number[] = [12, 18, 25, 15, 30, 16];
const newAges: number[] = ages.filter((age:number): boolean =>{
    return  age >= 18;
})

// find method
const scores: number[] = [45, 60, 75, 90, 55];
const newScores: number|undefined = scores.find(score => score > 70)
console.log(newScores)