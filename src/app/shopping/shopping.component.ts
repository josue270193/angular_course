import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'shopping',
    templateUrl: './shopping.component.html',
    standalone: true,    
    imports: [
      CommonModule, 
      RouterModule,
      HeaderComponent,
      RecipesComponent,
      ShoppingListComponent
    ]
})
export class ShoppingComponent {

    constructor() {
  
    }
  
}