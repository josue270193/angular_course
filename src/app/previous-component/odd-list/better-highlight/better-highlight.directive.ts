import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlight implements OnInit {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    }

    @HostListener('mouseenter') mouseEnter(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    }

}