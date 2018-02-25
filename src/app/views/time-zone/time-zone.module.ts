import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Logger } from '../../shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from '../../components/components.module';
import { TimeZoneRoutingModule } from './time-zone.routing';

import { TimeZoneComponent } from './time-zone.component';
import { TimeZoneDetailsComponent } from './time-zone-details/time-zone-details.component';
import { SearchTextBoxComponent } from './components/search-text-box/search-text-box.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { TimeZoneInfoComponent } from './components/time-zone-info/time-zone-info.component';
import { CountryInfoModelNamePipe } from './components/country-info/country-info-model-name.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AngularFontAwesomeModule,
        NgbTabsetModule,
        ComponentsModule,
        TimeZoneRoutingModule
    ],
    declarations: [
        CountryInfoModelNamePipe,
        TimeZoneComponent,
        TimeZoneDetailsComponent,
        SearchTextBoxComponent,
        CountryInfoComponent,
        TimeZoneInfoComponent,
        CountryInfoModelNamePipe
    ]
})
export class TimeZoneModule {
    constructor() {
        Logger.info('Views:TimeZoneModule', 'done');
    }
}
