import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { InactiveUserComponent } from "../inactive-user/inactive-user.component";
import { ActiveUserComponent } from "../active-user/active-user.component";

@Component({
    selector: 'list-user-app',
    templateUrl: './list-user.component.html',
    standalone: true,
    imports: [CommonModule, InactiveUserComponent, ActiveUserComponent]
})
export class ListUserComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        
    }

}