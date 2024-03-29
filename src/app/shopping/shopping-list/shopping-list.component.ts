import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Apple", 10),
    new Ingredient("Banana", 5),
    new Ingredient("Onion", 1)
  ];

  constructor() {

  }
  ngOnInit(): void {
    
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onDeleteIngredient() {
    this.ingredients = this.ingredients.slice(0, -1);
  }

}
