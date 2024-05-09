import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'even-number',
    templateUrl: './even-number.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class EvenNumberComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        
    }
}
