import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TimerTick } from "../shared/time.model";


@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html'
})
export class GameControlComponent implements OnInit {

    private timerRef: any;

    @Output('onTick')
    timerEvent = new EventEmitter<TimerTick>();    

    count = 0;

    constructor() {
        
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