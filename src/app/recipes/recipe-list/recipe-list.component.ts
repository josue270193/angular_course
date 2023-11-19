import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Spaghetti", "Recipe for spaghetti", "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg"),
    new Recipe("Spaghetti", "Recipe for spaghetti", "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg")
  ];


  constructor() {
    
  }

}
