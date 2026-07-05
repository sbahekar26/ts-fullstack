import { product } from "./data.js"

export function totalInStockValue(){
    const inStockItems = product.filter((p) => p.inStock === "yes");
    const prices = inStockItems.map((p) => p.price);
    const total = prices.reduce((sum, n) => sum = sum + n, 0);
    return total;
}