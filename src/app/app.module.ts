import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClicksDirective } from './clicks.directive';
import { ClickCountPipe } from './click-count.pipe';
import { ClickMeComponent } from './click-me/click-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ClicksDirective,
    ClickCountPipe,
    ClickMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
