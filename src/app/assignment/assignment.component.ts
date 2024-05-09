import { Component } from "@angular/core";
import { TimerTick } from "./4/shared/time.model";
import { CommonModule } from "@angular/common";
import { GameControlComponent } from "./4/game-control/game-control.component";
import { ListUserComponent } from "./5/list-user/list-user.component";
import { OddNumberComponent } from "./4/odd-number/odd-number.component";
import { EvenNumberComponent } from "./4/even-number/even-number.component";

@Component({
    selector: 'assignment',
    templateUrl: './assignment.component.html',
    standalone: true,
    imports: [
        CommonModule,
        GameControlComponent,
        OddNumberComponent,
        EvenNumberComponent,
        ListUserComponent
    ]
})
export class AssignmentComponent {

    numbers: Array<Number>;

    constructor() {
        this.numbers = [];
    }

    onTick(timerTick: TimerTick) {
        this.numbers.push(timerTick.time);
    }


}