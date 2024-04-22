import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {

    isOpen = false;

    @HostListener('document:click', ['$event']) onToggle(event: Event) {
        this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;

        const element = this.elementRef.nativeElement.getElementsByClassName('dropdown-menu')[0]; 
        if (element) {
            if (this.isOpen) {  
                this.renderer.addClass(element, 'show');
            } else {
                this.renderer.removeClass(element, 'show');
            }
        }
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

}