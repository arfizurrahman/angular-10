import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka Masala',
      'Homemade chicken tikka masala',
      'https://img.buzzfeed.com/video-api-prod/assets/d03461e6d185483da8317cf9ee03433e/BFV18861_ChickenTikkaMasala-ThumbA1080.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Spice', 2),
        new Ingredient('Masala', 1),
      ]
    ),
    new Recipe(
      'Pizza',
      'Homemade pizza',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b-2.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Mashroom', 5),
        new Ingredient('Cheeze', 3),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
