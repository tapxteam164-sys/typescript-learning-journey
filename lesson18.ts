function calculatePurchase(price: number, quantity: number): number {
    if (price < 0) {
        throw new Error("Price cannot be negative.");
    }

    if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
    }

    return price * quantity;
}

try {
    const total = calculatePurchase(5000, 3);

    console.log(`Total price: ${total}`);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(`Purchase failed: ${error.message}`);
    }
}