import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    standalone: true
})
export class DropdownDirective {

    isOpen = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    @HostListener('document:click', ['$event'])
    onToggle(event: Event): void {
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

}