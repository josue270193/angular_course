import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]',
    standalone: true
})
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {

    }

    ngOnInit(): void {

    }

    @HostListener('mouseenter') mouseEnter(eventData: Event) {        
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {        
        this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    }

}