import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AppAccountsComponent } from "./account/app-accounts/app-accounts.component";
import { BlockSuccessComponent } from "./block-success/block-success.component";
import { BlockWarningComponent } from "./block-warning/block-warning.component";
import { DatabindingComponent } from "./databinding/databinding.component";
import { LogUserDetailComponent } from "./log-user-detail/log-user-detail.component";
import { OddListComponent } from "./odd-list/odd-list.component";
import { UsernameComponent } from "./username/username.component";

@Component({
    selector: 'previous',
    templateUrl: './previous.component.html',
    standalone: true,
    imports: [
        CommonModule,
        AppAccountsComponent,
        BlockSuccessComponent,
        BlockWarningComponent,
        DatabindingComponent,
        LogUserDetailComponent,
        OddListComponent,
        UsernameComponent
    ]
})
export class PreviousComponent {

    constructor() {

    }
}