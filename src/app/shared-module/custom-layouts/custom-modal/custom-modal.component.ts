import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-custom-modal',
    templateUrl: './custom-modal.component.html',
    styleUrls: ['./custom-modal.component.less'],
    standalone: true
})
export class CustomModalComponent implements OnInit, OnDestroy {
  @Input() title: string = 'This is the Title!';
  @Input() footer: string = 'Footer comes here';
  @Input() content: string = 'Hey! You can place your content here.';

  @Input() close = true;
  @Input() size = 'M';
  @Output() confirmEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  isShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    const bodyEle = document.querySelector('body');
    if (bodyEle) {
      bodyEle.classList.toggle('show-modal');
    }
    this.isShown = true;
  }

  hide(): void {
    const bodyEle = document.querySelector('body');
    if (bodyEle) {
      bodyEle.classList.toggle('show-modal');
    }
    this.isShown = !this.isShown;
  }

  confirm(): void {
    this.confirmEvent.emit(true);
    this.hide();
  }

  cancel(): void {
    this.cancelEvent.emit(true);
    this.hide();
  }

  get getWidth() {
    switch(this.size) {
      case 'L': return '85%';
      case 'M': return '75%';
      case 'S': return '60%';
      default: return '75%'
    }
  } 

  ngOnDestroy() {

  }
}
