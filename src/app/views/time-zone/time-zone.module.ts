import { NgModule } from '@angular/core';
import { TimeZoneRoutingModule } from './time-zone.routing';

import { TimeZoneComponent } from './time-zone.component';
import { TimeZoneDetailsComponent } from './time-zone-details/time-zone-details.component';

@NgModule({
    imports: [
        TimeZoneRoutingModule
    ],
    declarations: [
        TimeZoneComponent,
        TimeZoneDetailsComponent
    ]
})
export class TimeZoneModule {
}
