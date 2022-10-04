import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { FavoritesService } from './favorites.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    isLoading: boolean = false;
    favoritesRecipes: Recipe[] = [];

    constructor(private favoritesService: FavoritesService, private router: Router) { }

    ngOnInit(): void {
        this.isLoading = true;
        this.favoritesService.getMyFavorites().subscribe(recipes => {
            this.isLoading = false;
            this.favoritesRecipes = recipes.filter(r => r.isFavorite);
        })
    }

    viewRecipes(index) {
        this.router.navigate(['recipes/', index]);
    }
}