import { Component, OnInit } from "@angular/core";
import { AccountDto } from "../account.model";
import { AccountService } from "../shared/account.service";

@Component({
    selector: 'app-new-account',
    templateUrl: './app-new-account.component.html'
})
export class AppNewAccount implements OnInit {

    constructor(private accountService: AccountService) {

    }

    ngOnInit(): void {

    }

    onClick(accountName: string, accountStatus: string) {
        this.accountService.addAccount(new AccountDto(accountName, accountStatus));
    }

}