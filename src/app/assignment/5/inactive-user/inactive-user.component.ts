import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";

@Component({
    selector: 'inactive-user-app',
    templateUrl: './inactive-user.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class InactiveUserComponent implements OnInit {
    
    users: Array<string>;
    
    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.users = this.userService.inactiveUsers;
    }

    setActive(index: number) {
        this.userService.changeStatusInactive(index);
    }
}