import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Spaghetti1", "Recipe for spaghetti1", "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg"),
    new Recipe("Spaghetti2", "Recipe for spaghetti2", "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg"),
    new Recipe("Spaghetti3", "Recipe for spaghetti3", "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg")
  ];

  constructor() {
    
  }

  onNewRecipe() {
    console.log("onNewRecipe()");
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }

}
