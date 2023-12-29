import { Component, OnInit } from '@angular/core';
import { TimeTick } from './assignment/4/shared/time.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  numbers = [];

  constructor() {

  }

  ngOnInit(): void {
    
  }

  onTick({time}: TimeTick) {    
    this.numbers.push(time);
  }

}
