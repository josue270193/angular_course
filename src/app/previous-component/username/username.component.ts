import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'username-input',
    templateUrl: './username.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class UsernameComponent implements OnInit {

    username = '';

    constructor() {

    }

    ngOnInit(): void {

    }

    onReset(): void {
        this.username = '';
    }

}
