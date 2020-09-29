import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickBuilderRoutingModule } from './click-builder-routing.module';
import { ClickBuilderComponent } from './click-builder.component';
import { ClickCountsComponent } from '../click-counts/click-counts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ClickBuilderComponent, ClickCountsComponent],
  imports: [
    CommonModule,
    ClickBuilderRoutingModule,
    SharedModule
  ]
})
export class ClickBuilderModule { }
