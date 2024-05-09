import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../../shared/dropdown.directive';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    DropdownDirective
  ]
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(): void {

  }

  onClickToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe);
  }
}
