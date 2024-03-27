import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, RendererStyleFlags2 } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlight implements OnInit {

    @Input() defaultColor: string = 'transparent'
    @Input('appBetterHighlight') highlightColor: string = 'blue'

    @HostBinding('style.backgroundColor') backgroundColor: string

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {        
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter(eventData: Event) {        
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {        
        this.backgroundColor = this.defaultColor;   
    }
    

}