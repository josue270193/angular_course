import { Component } from '@angular/core';
import { AccountDto } from '../account.model';

@Component({
  selector: 'app-accounts',    
  templateUrl: './app-accounts.component.html',
  styleUrl: './app-accounts.component.css'
})
export class AppAccountsComponent {

  accounts = Array<AccountDto>();

  constructor() {

  }

  onAccountAdded(newAccount: AccountDto) {
    this.accounts.push(newAccount);
  }

  onStatusChanged({id, status}) {
    this.accounts[id].status = status;
  }

}
