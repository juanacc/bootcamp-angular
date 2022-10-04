import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  isFavorite(recipe: Recipe) {
    recipe.isFavorite = !recipe.isFavorite;
    this.dataStorageService.storeRecipe();
  }

}
