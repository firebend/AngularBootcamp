import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-builder',
  templateUrl: './click-builder.component.html',
  styleUrls: ['./click-builder.component.scss']
})
export class ClickBuilderComponent implements OnInit {

  clickTitles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTitle(title: string) {
    this.clickTitles.push(title);
  }

  checkAddTitle(event: KeyboardEvent, input: HTMLInputElement) {
    if (event.key === 'Enter') {
      this.addTitle(input.value);
      input.value = '';
    }
  }
}
