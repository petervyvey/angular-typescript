import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeZoneRoutingModule } from './time-zone.routing';

import { TimeZoneComponent } from './time-zone.component';
import { TimeZoneDetailsComponent } from './time-zone-details/time-zone-details.component';
import { SearchTextBoxComponent } from './components/search-text-box/search-text-box.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    imports: [
        FormsModule,
        AngularFontAwesomeModule,
        TimeZoneRoutingModule
    ],
    declarations: [
        TimeZoneComponent,
        TimeZoneDetailsComponent,
        SearchTextBoxComponent
    ]
})
export class TimeZoneModule {
}
