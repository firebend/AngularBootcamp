import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MessageLogService } from '../message-log.service';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent implements OnInit, OnDestroy {

  @Input() displayString: string;

  clicks: number;

  constructor(private readonly logger: MessageLogService) { }

  ngOnInit(): void {
    this.logger.Information(`ClickMe ${this.displayString} initialized!`);
  }

  ngOnDestroy(): void {
    this.logger.Warning(`ClickMe ${this.displayString} destroyed!`);
  }

  onClick() {
    this.logger.Debug(`${this.displayString} clicked!`);
  }
}
