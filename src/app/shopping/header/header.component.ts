import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownDirective } from "../shared/dropdown.directive";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        DropdownDirective,
        RouterModule
    ]
})
export class HeaderComponent {

    collapsed = true;
    // dropdownCollapsed = false;

    constructor(private router: Router) {

    }

    goToAssignment() {
        this.router.navigate(["/assignment"]);
    }
}