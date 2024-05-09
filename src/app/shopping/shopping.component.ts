import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouteEvent } from "./shared/route-event.model";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@Component({
    selector: 'shopping',
    templateUrl: './shopping.component.html',
    standalone: true,    
    imports: [
      CommonModule, 
      HeaderComponent,
      RecipesComponent,
      ShoppingListComponent
    ]
})
export class ShoppingComponent {

    displayView = "recipes";  

    constructor() {
  
    }
  
    showView(event: RouteEvent) {
      this.displayView = event.show;
    }
  
}