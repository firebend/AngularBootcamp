import { Component, OnInit } from '@angular/core';
import { TotalClicksService } from '../total-clicks.service';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.scss']
})
export class ClickCountsComponent implements OnInit {
  get totalClicks(): number {
    return this._totalClicksService.totalClicks;
  }

  constructor(private readonly _totalClicksService: TotalClicksService) { }

  ngOnInit(): void {
  }

}
