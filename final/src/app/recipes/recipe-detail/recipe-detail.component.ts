import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Supermarket } from 'src/app/supermarkets/supermarket.model';
import { SupermarketService } from 'src/app/supermarkets/supermarket.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  showSupermarkets: boolean;
  supermarkets: Supermarket[] = [];
  productsInSupermarkets: any[] = [];
  ingredientToSearch: string = '';
  isLoading: boolean = false;
  notProducts: boolean = false;
  stockLimit: number = 6;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private supermarketService: SupermarketService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.showSupermarkets = false;
      this.notProducts = false;
      this.id = parseInt(params.id);
      this.recipe = this.recipeService.getRecipe(this.id)
    });
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  editRecipe() {
    //this.router.navigate(['edit'], { relativeTo: this.route });//esto tambien funciona para navegar al componente de edicion!!
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  searchIngredient(ingredient: Ingredient) {
    this.isLoading = true;
    this.notProducts = false;
    this.showSupermarkets = false;
    this.ingredientToSearch = ingredient.name;

    this.supermarketService.getAllSupermarkets().subscribe(supermarkets => {
      //this.showSupermarkets = supermarkets.length > 0;
      //console.log('show', supermarkets)
      this.isLoading = false;

      this.supermarkets = supermarkets.filter(supermarket => {
        return supermarket.products.some(product => product.name.toLowerCase() === this.ingredientToSearch.toLowerCase());
      });

      this.showSupermarkets = this.supermarkets.length > 0;
      this.notProducts = true;
      console.log('SHOW', this.showSupermarkets)

      this.productsInSupermarkets = this.supermarkets.map(supermarket => {
        let products = {
          superName: '',
          superAddress: '',
          product: {}
        };

        products.superName = supermarket.name;
        products.superAddress = supermarket.address;
        products.product = supermarket.products.filter(p => p.name.toLowerCase() === this.ingredientToSearch.toLowerCase())[0];
        return products;
      });
    })
  }

}
