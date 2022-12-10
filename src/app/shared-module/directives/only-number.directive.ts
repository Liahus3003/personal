import { ChangeDetectorRef, Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';


// tslint:disable-next-line:directive-selector
@Directive({ selector: '[OnlyNumber]' })
export class OnlyNumberDirective {
  regexStr = '^[1-9][0-9]*$';
  regexStrKeyUp = '^[0-9]*$';
  minValue = 1;
  enterNumberOnly = true;
  // @Output() ngModelChange = new EventEmitter();
  constructor(private el: ElementRef, private chRef: ChangeDetectorRef, private model: NgModel) {

  }

  @Input() OnlyNumber: string = '';

  @HostListener('blur', ['$event']) onBlur(event: any) {
    const ch = String.fromCharCode(event.keyCode);
    const regEx = new RegExp(this.regexStr);
    if (!regEx.test(event.target.value)) {
      this.el.nativeElement.value = this.minValue;
     // this.ngModelChange.emit(this.minValue);
    }
    if (regEx.test(event.target.value)) {
      this.el.nativeElement.value = event.target.value;
      return;
    } else {
      event.preventDefault();
    }
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: any) {
    const e = <KeyboardEvent>event;
    if (this.OnlyNumber && this.OnlyNumber.indexOf('|') && this.OnlyNumber.split('|')[1]
      && this.OnlyNumber.split('|')[1].length > 0) {
      this.minValue = parseInt(this.OnlyNumber.split('|')[1], 10);
      if (!(this.minValue >= 0)) {
        this.minValue = 1;
      }
      this.enterNumberOnly = Boolean(this.OnlyNumber.split('|')[0]);
    }
    if (this.enterNumberOnly) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
      }
      const ch = String.fromCharCode(e.keyCode);
      const regEx = new RegExp(this.regexStr);
      if (!regEx.test(event.target.value)) {
        // event.target.value = this.minValue;
      }
      if (regEx.test(event.target.value)) {
        this.el.nativeElement.value = event.target.value;
        return;
      } else {
        e.preventDefault();
      }
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    const e = <KeyboardEvent>event;
    if (this.OnlyNumber && this.OnlyNumber.indexOf('|') && this.OnlyNumber.split('|')[1]
      && this.OnlyNumber.split('|')[1].length > 0) {
      this.minValue = parseInt(this.OnlyNumber.split('|')[1], 10);
      if (!(this.minValue >= 0)) {
        this.minValue = 1;
      }
      this.enterNumberOnly = Boolean(this.OnlyNumber.split('|')[0]);
    }
    if (this.enterNumberOnly) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }
      const ch = String.fromCharCode((96 <= e.keyCode && e.keyCode <= 105) ? e.keyCode - 48 : e.keyCode);
      const value = event.target.value + ch;
      const regEx = new RegExp(this.regexStr);
      if (regEx.test(value)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}
