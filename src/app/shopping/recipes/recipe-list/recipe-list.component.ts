import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  standalone: true,
  imports: [CommonModule, RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activedRoute })
  }

}
