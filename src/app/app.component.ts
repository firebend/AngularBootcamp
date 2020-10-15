import { Component } from '@angular/core';
import { MessageLogService } from './message-log.service';
import { TotalClicksService } from './total-clicks.service';
import { LogLevel } from './types/log-level';
import { ILogMessage } from './types/log-message';

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

  get logs(): { level: LogLevel, messages: ILogMessage[] } [] {
    return [
      { level: 'Error', messages: this.logger.GetErrors() },
      { level: 'Warning', messages: this.logger.GetWarnings() },
      { level: 'Information', messages: this.logger.GetInformation() },
      { level: 'Debug', messages: this.logger.GetDebugs() }
    ];
  }

  constructor(private readonly _totalClicksService: TotalClicksService, private readonly logger: MessageLogService) {}
}
