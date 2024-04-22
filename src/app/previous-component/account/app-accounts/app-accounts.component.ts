import { Component, OnInit } from '@angular/core';
import { AccountDto } from '../account.model';
import { LoggingService } from 'src/app/shopping/shared/logging.service';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './app-accounts.component.html',
  styleUrl: './app-accounts.component.css'
})
export class AppAccountsComponent implements OnInit {

  accounts = Array<AccountDto>();

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

}
