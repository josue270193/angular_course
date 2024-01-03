import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent 
// implements OnInit, OnChanges, DoCheck, 
// AfterContentInit, AfterContentChecked, 
// AfterViewChecked, AfterViewInit,
// OnDestroy 
{

  @ViewChild('cardTitle', {static: true}) cardTitle: ElementRef;

  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string
  };

  constructor() {
    console.log('constructor called');
  }

  // ngOnInit(): void {
  //   console.log('ngOnInit called');
  //   console.log('ngOnInit Text content: ', this.cardTitle.nativeElement.textContent);
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked called');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called');
  //   console.log('ngAfterViewInit Text content: ', this.cardTitle.nativeElement.textContent);
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked called');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called');
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck called');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called', changes);
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy called');    
  // }
}
