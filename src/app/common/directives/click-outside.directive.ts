import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy, HostListener, Input, AfterViewInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({
    selector: '[appClickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
    constructor(private _elementRef: ElementRef) {
    }
    @Output()
    public clickOutside: EventEmitter<boolean> = new EventEmitter<boolean>();
    isActive: boolean;
    /**
     * register a click event for a element having clickOutside attribute
     * @param  {MouseEvent} event
     * @param  {HTMLElement} targetElement
     * @returns void
     */
    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!this.isActive) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(false);
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.isActive = true;
        }, 100);
    }

    ngOnDestroy(): void {
        this.isActive = false;
    }
}