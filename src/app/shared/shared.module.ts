import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClicksDirective } from '../clicks.directive';
import { ClickCountPipe } from '../click-count.pipe';
import { ClickMeComponent } from '../click-me/click-me.component';

@NgModule({
  declarations: [
    ClicksDirective,
    ClickCountPipe,
    ClickMeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClicksDirective,
    ClickCountPipe,
    ClickMeComponent
  ]
})
export class SharedModule { }
