import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeChangeSubscription: Subscription;
  existRecipes: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeChangeSubscription = this.recipeService.recipedChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      //TODO: validar si hay recetas!!!!!
      //this.recipes = [];
      this.existRecipes = this.recipes.length > 0 ? true : false;
    })
    //this.recipes = this.recipeService.getRecipes();
    //console.log('RECETAS', this.recipes);
  }

  ngOnDestroy(): void {//agregado por mi
    this.recipeChangeSubscription.unsubscribe();
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
