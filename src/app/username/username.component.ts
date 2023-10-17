import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'username-input',
    templateUrl: './username.component.html'
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
