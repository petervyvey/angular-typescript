
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TimeZoneComponent } from './time-zone.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'timezone', component: TimeZoneComponent }
    ])
  ],
  declarations: [
    TimeZoneComponent
  ]
})
export class TimeZoneModule { }
