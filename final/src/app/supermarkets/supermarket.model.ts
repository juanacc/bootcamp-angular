import { Product } from "./product.model";

export class Supermarket {
    id: number;
    name: string;
    address: string;
    products: Product[];

    constructor(name: string, address: string, ingredients: Product[]) {
        this.name = name;
        this.address = address;
        this.products = this.products;
    }
}