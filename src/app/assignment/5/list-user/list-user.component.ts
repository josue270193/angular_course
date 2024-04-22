import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { InactiveUserComponent } from "../inactive-user/inactive-user.component";
import { ActiveUserComponent } from "../active-user/active-user.component";
import { CounterService } from "../shared/counter.service";

@Component({
    selector: 'list-user-app',
    templateUrl: './list-user.component.html',
    standalone: true,
    imports: [CommonModule, InactiveUserComponent, ActiveUserComponent]
})
export class ListUserComponent implements OnInit {

    countActiveUser = 0;
    countInactiveUser = 0;

    constructor(private counterService: CounterService) {

    }

    ngOnInit(): void {
        this.counterService.eventCountActiveUser.subscribe(
            (value) => {
                this.countActiveUser = value;
            }
        );
        this.counterService.eventCountInactiveUser.subscribe(
            (value) => {
                this.countInactiveUser = value;
            }
        );        
    }

}