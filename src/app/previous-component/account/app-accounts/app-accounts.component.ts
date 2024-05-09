import { Component, OnInit } from '@angular/core';
import { AccountDto } from '../account.model';
import { AccountService } from '../shared/account.service';
import { CommonModule } from '@angular/common';
import { AppDetailAccountComponent } from '../app-detail-account/app-detail-account.component';
import { AppNewAccountComponent } from '../app-new-account/app-new-account.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './app-accounts.component.html',
  styleUrl: './app-accounts.component.css',
  standalone: true,
  imports: [
    CommonModule,
    AppDetailAccountComponent,
    AppNewAccountComponent
  ]
})
export class AppAccountsComponent implements OnInit {

  accounts = Array<AccountDto>();

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

}
