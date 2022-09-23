import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipedChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Lamb-Medium-Rare%E2%80%8B%E2%80%8B.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    //     new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Lamb-Medium-Rare%E2%80%8B%E2%80%8B.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 27)]),
    // ];
    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        //le pongo .slice() para que el getter retorne una copia de la lista de recetas. Si retorno la lista de recetas directamente,
        //estare pasando una referencia a dicha lista y si hago cualquier modificacion sobre dicha lista afuera del servicio, el cambio se vera afectado tambien
        //en el servicio
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipedChanged.next(this.recipes.slice());
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipedChanged.next(this.recipes.slice());

    }
    updateRecipe(i: number, recipe: Recipe) {
        this.recipes[i] = recipe;
        this.recipedChanged.next(this.recipes.slice());
    }

    deleteRecipe(i: number) {
        console.log('index delete', i)
        this.recipes.splice(i, 1);
        this.recipedChanged.next(this.recipes.slice());
    }
}