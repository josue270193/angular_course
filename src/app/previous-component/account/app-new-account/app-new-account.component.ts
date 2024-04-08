import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AccountDto } from "../account.model";

@Component({
    selector: 'app-new-account',
    templateUrl: './app-new-account.component.html'
})
export class AppNewAccount implements OnInit {    

    @Output() accountAdded = new EventEmitter<AccountDto>();

    constructor() {

    }

    ngOnInit(): void {
        
    }

    onClick(accountName: string, accountStatus: string) {
        this.accountAdded.emit(
            new AccountDto(accountName, accountStatus)
        )
        console.log("added new account: " + accountStatus);
    }

}