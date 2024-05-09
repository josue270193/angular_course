import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { BasicHighlightDirective } from "./basic-highlight/basic-hightight.directive";
import { BetterHighlightDirective } from "./better-highlight/better-highlight.directive";
import { UnlessDirective } from "./unless/unless.directive";

@Component({
    selector: 'odd-list',
    templateUrl: './odd-list.component.html',
    standalone: true,
    imports: [
        CommonModule,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective
    ]
}) 
export class OddListComponent implements OnInit {
    
    number = [1,2,3,4,5,6];
    numberOdd = [1,3,5];
    numberEven = [2,4,6];
    value = 10;

    onlyOdd = false;

    constructor() {

    }

    ngOnInit() {

    }

}