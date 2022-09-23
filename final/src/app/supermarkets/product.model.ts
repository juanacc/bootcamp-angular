export class Product {
    id: number;
    name: string;
    price: string;
    stock: string;

    constructor(name: string, price: string, stock: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}