import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({ providedIn: 'root' })
export class UserService {

    activeUsers = [
        'pedro', 'juan'
    ];

    inactiveUsers = [
        'maria', 'ana'
    ]

    constructor(private counterService: CounterService) {

    }

    changeStatusActive(index: number) {
        let user = this.activeUsers.splice(index, 1)[0];
        this.inactiveUsers.push(user);
    }

    changeStatusInactive(index: number) {
        let user = this.inactiveUsers.splice(index, 1)[0];
        this.activeUsers.push(user);
    }

}