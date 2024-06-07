import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    DropdownDirective,
    RouterModule
  ]
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private activedRoute: ActivatedRoute, private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => {      
      this.recipe = this.recipeService.getRecipeById(+params['id']);      
    })
  }

  onClickToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe);
  }
}
