import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'odd-list',
    templateUrl: './odd-list.component.html'
}) 
export class OddListComponent implements OnInit {
    
    number = [1,2,3,4,5,6];

    numberOdd = [1,3,5];
    numberEven = [2,4,6];

    onlyOdd = false;

    constructor() {

    }

    ngOnInit() {

    }

}