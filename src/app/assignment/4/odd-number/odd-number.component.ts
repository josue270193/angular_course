import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'odd-number',
    templateUrl: './odd-number.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class OddNumberComponent implements OnInit {
    
    constructor() {
        
    }

    ngOnInit(): void {
        
    }

}