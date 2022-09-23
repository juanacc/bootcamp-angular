import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SupermarketListComponent } from "./supermarket-list/supermarket-list.component";
import { SupermarketProductsComponent } from "./supermarket-products/supermarket-products.component";
import { SupermarketRoutingModule } from "./supermarket-routing.module";
import { SupermarketComponent } from "./supermarket.component";

@NgModule({
    declarations: [
        SupermarketComponent,
        SupermarketProductsComponent,
        SupermarketListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SupermarketRoutingModule,
        SharedModule,
    ]
})
export class SupermarketModule { }