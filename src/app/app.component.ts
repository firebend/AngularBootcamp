import { Component } from '@angular/core';
import { TotalClicksService } from './total-clicks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeBootcamp';
  showClickMe = false;

  get totalClicks(): number {
    return this._totalClicksService.totalClicks;
  }

  constructor(private readonly _totalClicksService: TotalClicksService) {}
}
