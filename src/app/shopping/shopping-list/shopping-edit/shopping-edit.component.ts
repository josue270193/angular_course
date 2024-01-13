import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

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

  @Output() 
  addIngredient = new EventEmitter<Ingredient>();
  
  @Output() 
  deleteIngredient = new EventEmitter<void>();

  onClear() {
    this.nameInput.nativeElement.value = "";
    this.amountInput.nativeElement.value = "";
  }

  onDeleteItem() {
    this.deleteIngredient.emit();
  }

  onAddItem() {
    const ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.addIngredient.emit(ingredient);
  }

}
