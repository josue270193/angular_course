import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {    

    private ingredients = [
        new Ingredient("Apple", 10),
        new Ingredient("Banana", 5),
        new Ingredient("Onion", 1)
    ];

    ingredientAdded = new EventEmitter<Ingredient[]>();

    public getIngredients() {
        return this.ingredients.slice();
    }

    private validateAndAddIngredient(ingredient: Ingredient) {
        let index = this.ingredients.findIndex(item => item.name === ingredient.name);
        if (index >= 0) {            
            this.ingredients[index].amount += ingredient.amount;            
        } else {            
            this.ingredients.push(ingredient);            
        }
    }

    public addIngredient(ingredient: Ingredient) {
        this.validateAndAddIngredient(ingredient);        
        this.ingredientAdded.emit(this.getIngredients());
    }

    public addIngredients(ingredients: Ingredient[]) {
        ingredients.forEach(i => this.validateAndAddIngredient(i));
        this.ingredientAdded.emit(this.getIngredients());
    }

    public deleteIngredient() {
        this.ingredients = this.ingredients.slice(0, -1);   
        this.ingredientAdded.emit(this.getIngredients());
    }
}