import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { SupermarketProductsComponent } from "./supermarket-products/supermarket-products.component";
import { SupermarketComponent } from "./supermarket.component";

const routes: Routes = [
    {
        path: '', component: SupermarketComponent, canActivate: [AuthGuard], children: [
            //{path:'', component: SupermarketHomeComponent}
            { path: ':id', component: SupermarketProductsComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupermarketRoutingModule { }