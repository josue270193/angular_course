import { Component, OnInit } from '@angular/core';
import { TimeTick } from './assignment/4/shared/time.model';
import { RouteEvent } from './shopping/shared/route-event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayView = "recipes";
  numbers = [];

  constructor() {

  }

  ngOnInit(): void {
    
  }

  onTick({time}: TimeTick) {    
    this.numbers.push(time);
  }

  showView(event: RouteEvent) {
    this.displayView = event.show;
  }

}
