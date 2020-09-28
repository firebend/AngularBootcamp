import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalClicksService {
  private _totalClicks = 0;

  constructor() { }

  get totalClicks(): number {
    return this._totalClicks;
  }

  registerClick() {
    this._totalClicks++;
  }
}
