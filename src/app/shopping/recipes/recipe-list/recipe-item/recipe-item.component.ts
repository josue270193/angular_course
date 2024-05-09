import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;  

  constructor(private recipeService: RecipeService) {
    
  }

  ngOnInit(): void {
      
  }

  onClick() {        
    this.recipeService.recipeSelected.emit(this.recipe);
  }
  
}
