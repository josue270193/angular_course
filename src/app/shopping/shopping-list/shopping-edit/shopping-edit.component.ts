import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput")
  nameInput: ElementRef;

  @ViewChild("amountInput")
  amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {

  }

  onClear() {
    this.nameInput.nativeElement.value = "";
    this.amountInput.nativeElement.value = "";
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient();
  }

  onAddItem() {
    const ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      parseInt(this.amountInput.nativeElement.value)
    );
    
    if (ingredient.name && ingredient.amount > 0) {
      this.shoppingListService.addIngredient(ingredient);
      // console.log(this.shoppingListService.getIngredients());
    }    
  }

}
