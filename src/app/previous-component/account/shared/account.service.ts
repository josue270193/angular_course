import { LoggingService } from "src/app/shopping/shared/logging.service";
import { AccountDto } from "../account.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AccountService {

    accounts = Array<AccountDto>();

    constructor(private loggingService: LoggingService) {
        
    }

    addAccount(newAccount: AccountDto) {        
        this.accounts.push(newAccount);
        this.loggingService.logToStatusChanged(newAccount.status);
    }

    changeStatus({ id, status }) {        
        this.accounts[id].status = status;
        this.loggingService.logToStatusChanged(status);
    }

}