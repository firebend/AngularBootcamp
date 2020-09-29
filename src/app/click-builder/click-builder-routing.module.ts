import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickCountsComponent } from '../click-counts/click-counts.component';

import { ClickBuilderComponent } from './click-builder.component';

const routes: Routes = [
  { path: '', component: ClickBuilderComponent },
  { path: 'counts', component: ClickCountsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickBuilderRoutingModule { }
