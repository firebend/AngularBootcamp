import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent implements OnInit, OnDestroy {

  @Input() displayString: string;

  clicks: number;

  constructor() { }

  ngOnInit(): void {
    console.log('ClickMeComponent initialized');
  }

  ngOnDestroy(): void {
    console.log('ClickMeComponent destroyed');
  }

}
