import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'log-user-detail',
    templateUrl: './log-user-detail.component.html',
    styleUrls: ['./log-user-detail.component.css']
})
export class LogUserDetail implements OnInit {

    isDisplayDetail = false;
    clickLog = [];

    constructor() {
        
    }

    ngOnInit(): void {
        
    }

    onClickDisplayDetails() {
        this.isDisplayDetail = !this.isDisplayDetail;

        let value = new Date();
        this.clickLog.push(value);
    }

    onClickLogStyle(index) {        
        if (index > 5) {
            return {
                'background-color': 'blue'
            };
        }
    }

    onClickLogClass(index) {        
        if (index > 5) {
            return 'colorWhite';
        }
    }
}