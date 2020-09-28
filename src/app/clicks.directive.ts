import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { TotalClicksService } from './total-clicks.service';

@Directive({
  selector: '[appClicks]',
  // providers: [TotalClicksService]
})
export class ClicksDirective {

  @Output() appClicks = new EventEmitter<number>();
  private _clickCount = 0;

  @HostListener('click') click() {
    this._clickCount++;
    this.appClicks.emit(this._clickCount);
    this._totalClicksService.registerClick();
  }

  constructor(private readonly _totalClicksService: TotalClicksService) { }
}
