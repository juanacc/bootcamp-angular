import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Supermarket } from '../supermarket.model';
import { SupermarketService } from '../supermarket.service';
//import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-supermarket-products',
    templateUrl: './supermarket-products.component.html',
    styleUrls: ['./supermarket-products.component.css']
})
export class SupermarketProductsComponent implements OnInit {
    id: number;
    supermarket: Supermarket;
    superName: string = '';
    //supermarketSubscriber: Subscription;
    isLoading: boolean = false;
    stockLimit: number = 6;

    constructor(private route: ActivatedRoute, private supermarketService: SupermarketService) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.isLoading = true;
            this.id = parseInt(params.id);
            this.supermarketService.getSupermarketById(this.id).subscribe((supermarket: Supermarket) => {
                this.isLoading = false;
                this.supermarket = supermarket;
                console.log(this.supermarket.products);
                this.superName = supermarket.name;
            })
        });
    }

    // ngOnDestroy(): void {
    //     this.supermarketSubscriber.unsubscribe();
    // }

}