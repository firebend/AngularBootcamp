import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClicks]'
})
export class ClicksDirective {

  @Output() appClicks = new EventEmitter<number>();
  private _clickCount = 0;

  @HostListener('click') click() {
    this._clickCount++;
    this.appClicks.emit(this._clickCount);
  }

  constructor() { }
}
