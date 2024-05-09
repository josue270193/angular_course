import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'active-user-app',
    templateUrl: './active-user.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class ActiveUserComponent implements OnInit {
    
    users: Array<string>;
    
    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.users = this.userService.activeUsers;
    }

    setInactive(index: number) {
        this.userService.changeStatusActive(index);
    }

}