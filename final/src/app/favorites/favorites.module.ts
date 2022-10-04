import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FavoritesComponent } from "./favorites.component";

@NgModule({
    declarations: [
        FavoritesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ]
})
export class FavoritesModule { }