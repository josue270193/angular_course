import { Component, EventEmitter, Output } from "@angular/core";
import { RouteEvent } from "../shared/route-event.model";
import { CommonModule } from "@angular/common";
import { DropdownDirective } from "../shared/dropdown.directive";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        DropdownDirective
    ]
})
export class HeaderComponent {

    @Output()
    goToEvent = new EventEmitter<RouteEvent>();

    collapsed = true;
    // dropdownCollapsed = false;

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