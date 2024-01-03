import { Component, EventEmitter, Output } from "@angular/core";
import { RouteEvent } from "../shared/route-event.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    @Output()
    goToEvent = new EventEmitter<RouteEvent>();

    collapsed = true;
    dropdownCollapsed = false;


    constructor() {

    }

    goToShoppingList() {
        var event = new RouteEvent("shopping-list");
        this.goToEvent.emit(event);
    }

    goToRecipes() {
        var event = new RouteEvent("recipes");
        this.goToEvent.emit(event);
    }
}