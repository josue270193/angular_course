import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({ providedIn: 'root' })
export class RecipeService {

    private recipes = [
        new Recipe(
            "Spaghetti1",
            "Recipe for spaghetti1",
            "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg",
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Cheese', 2)
            ]
        ),
        new Recipe(
            "Spaghetti2",
            "Recipe for spaghetti2",
            "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg",
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Onion', 1),
            ]
        ),
        new Recipe(
            "Spaghetti3",
            "Recipe for spaghetti3",
            "https://thefastrecipe.com/wp-content/uploads/2021/04/fried-spaghetti-4.jpg",
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Onion', 1),
            ]
        )
    ]

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {

    }

    public getRecipes() {
        return this.recipes.slice();
    }

    public addIngredientsToShoppingList(recipe: Recipe) {
        this.shoppingListService.addIngredients(recipe.ingredients);
    }

}