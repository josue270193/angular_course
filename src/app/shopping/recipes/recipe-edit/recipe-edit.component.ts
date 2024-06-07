import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'recipe-edit',
    templateUrl: './recipe-edit.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class RecipeEditComponent implements OnInit {

    recipe: Recipe;
    editMode: Boolean = false;

    constructor(private activedRoute: ActivatedRoute, private recipeService: RecipeService) {

    }

    ngOnInit(): void {
        this.activedRoute.params.subscribe(
            (params: Params) => {                
                const id = params['id'];
                this.editMode = false;
                if (id) {
                    this.recipe = this.recipeService.getRecipeById(+id);
                    this.editMode = true;
                }                
            });
    }

}