import { Component, OnInit } from '@angular/core';
import { TimerTick } from './assignment/4/shared/time.model';
import { RouteEvent } from './shopping/shared/route-event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {

  displayView = "recipes";
  numbers: Array<Number>;

  constructor() {
    this.numbers = [];
  }

  onTick(timerTick: TimerTick) {    
    this.numbers.push(timerTick.time);
  }

  showView(event: RouteEvent) {
    this.displayView = event.show;
  }

}
