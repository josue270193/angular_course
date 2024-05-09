import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
  standalone: true,
  imports: [
    CommonModule,
    RecipeListComponent,
    RecipeDetailComponent
  ]
})
export class RecipesComponent implements OnInit {

  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.recipeSelected = recipe;
      });
  }

}
