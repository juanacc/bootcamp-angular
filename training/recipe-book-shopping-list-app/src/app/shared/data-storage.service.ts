import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";
import { environment } from "../../environments/environment"


@Injectable({ providedIn: 'root' })
export class DataStorageService {
    private urlBase = environment.url_base;

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        console.log('guardar recetas', recipes);
        this.http.put(`${this.urlBase}recipes.json`, recipes).subscribe(resp => {
            console.log(resp);
        });
    }

    // fetchRecipes() {
    //     this.authService.user.pipe(take(1)).subscribe();
    //     return this.http.get<Recipe[]>(`${this.urlBase}recipes.json`,)
    //         .pipe(
    //             map(recipes => {
    //                 return recipes.map(recipe => {
    //                     return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
    //                 })
    //             }),
    //             tap(recipes => { this.recipeService.setRecipes(recipes) }));
    // }

    fetchRecipes() {
        return this.http.get<Recipe[]>(`${this.urlBase}recipes.json`)
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes)
                })
            )
    }
}