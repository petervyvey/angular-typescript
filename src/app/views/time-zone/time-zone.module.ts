import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Logger } from '../../shared.module';
import { TimeZoneRoutingModule } from './time-zone.routing';

import { TimeZoneComponent } from './time-zone.component';
import { TimeZoneDetailsComponent } from './time-zone-details/time-zone-details.component';
import { SearchTextBoxComponent } from './components/search-text-box/search-text-box.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { TimeZoneInfoComponent } from './components/time-zone-info/time-zone-info.component';

@NgModule({
    imports: [
        FormsModule,
        AngularFontAwesomeModule,
        TimeZoneRoutingModule
    ],
    declarations: [
        TimeZoneComponent,
        TimeZoneDetailsComponent,
        SearchTextBoxComponent,
        CountryInfoComponent,
        TimeZoneInfoComponent
    ]
})
export class TimeZoneModule {
    constructor() {
        Logger.Info('Views:TimeZoneModule', 'done');
    }
}
