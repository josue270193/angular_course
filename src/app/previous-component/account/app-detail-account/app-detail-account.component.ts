import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from "@angular/core";
import { AccountDto } from "../account.model";
import { AccountService } from "../shared/account.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-detail-account',
    templateUrl: './app-detail-account.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class AppDetailAccountComponent implements OnInit, OnChanges {

    @Input() account: AccountDto;
    @Input() id: number;

    @ViewChild('radioActiveStatus', { static: true }) radioActiveStatus: ElementRef;
    @ViewChild('labelActiveStatus', { static: true }) labelActiveStatus: ElementRef;
    @ViewChild('radioInactiveStatus', { static: true }) radioInactiveStatus: ElementRef;
    @ViewChild('labelInactiveStatus', { static: true }) labelInactiveStatus: ElementRef;
    @ViewChild('radioHiddenStatus', { static: true }) radioHiddenStatus: ElementRef;
    @ViewChild('labelHiddenStatus', { static: true }) labelHiddenStatus: ElementRef;

    constructor(private render: Renderer2, private accountService: AccountService) {

    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.radioActiveStatus.nativeElement.name = "radio_" + this.id;
        this.radioActiveStatus.nativeElement.id = "radio_" + this.id + "_1";
        this.labelActiveStatus.nativeElement.htmlFor = "radio_" + this.id + "_1";

        this.radioInactiveStatus.nativeElement.name = "radio_" + this.id;
        this.radioInactiveStatus.nativeElement.id = "radio_" + this.id + "_2";
        this.labelInactiveStatus.nativeElement.htmlFor = "radio_" + this.id + "_2";

        this.radioHiddenStatus.nativeElement.name = "radio_" + this.id;
        this.radioHiddenStatus.nativeElement.id = "radio_" + this.id + "_3";
        this.labelHiddenStatus.nativeElement.htmlFor = "radio_" + this.id + "_3";

        switch (this.account.status) {
            case 'active':
                this.radioActiveStatus.nativeElement.checked = "true";
                break;
            case 'inactive':
                this.radioInactiveStatus.nativeElement.checked = "true";
                break;
            case 'hidden':
                this.radioHiddenStatus.nativeElement.checked = "true";
                break;
        }
    }

    onStatusChanged(event) {
        this.accountService.changeStatus({
            id: this.id,
            status: event.target.value
        });
    }

}