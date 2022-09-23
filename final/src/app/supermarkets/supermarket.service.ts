import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { filter, tap } from 'rxjs/operators';
import { Ingredient } from "../shared/ingredient.model";
import { Product } from "./product.model";
import { Supermarket } from "./supermarket.model";

@Injectable({ providedIn: 'root' })
export class SupermarketService {
    private urlBase = 'https://631f859558a1c0fe9f6b2ccc.mockapi.io/supermarket';

    constructor(private http: HttpClient) { }

    getAllSupermarkets() {
        return this.http.get<any>(this.urlBase);
    }

    getSupermarketById(id: number) {
        return this.http.get<Supermarket>(`${this.urlBase}/${id}`);
    }

    getSupermarketByProducts(name: string) {
        return this.http.get<any>(this.urlBase);
    }
}