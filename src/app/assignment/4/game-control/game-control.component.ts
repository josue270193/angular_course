import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TimerTick } from "../shared/time.model";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class GameControlComponent implements OnInit {

    private timerRef: any;

    @Output('onTick')
    timerEvent = new EventEmitter<TimerTick>();    

    public count: number;

    constructor() {
        this.count = 0
    }

    ngOnInit(): void {

    }

    onStart() {
        this.count = 1;
        this.timerEvent.emit({ time: this.count});

        this.timerRef = setInterval(() => {
            this.count++;
            this.timerEvent.emit({ time: this.count})
        }, 1000);
    }

    onStop() {
        this.count = 0;
        clearInterval(this.timerRef);
    }

}