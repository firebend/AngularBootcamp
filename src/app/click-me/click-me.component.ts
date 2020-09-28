import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent implements OnInit {

  @Input() displayString: string;

  clicks: number;

  constructor() { }

  ngOnInit(): void {
  }

}
