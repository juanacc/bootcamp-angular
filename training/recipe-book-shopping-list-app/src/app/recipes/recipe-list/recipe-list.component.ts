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
  recipeChangeSubscription: Subscription; //agregado por mi

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeChangeSubscription = this.recipeService.recipedChanged.subscribe((recipes: Recipe[]) => {
      console.log('lista de recetas actualizada', recipes);
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {//agregado por mi
    this.recipeChangeSubscription.unsubscribe();
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
