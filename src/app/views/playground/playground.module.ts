import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Logger } from '../../shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from '../../components/components.module';
import { TimeZoneRoutingModule } from './playround.routing';

import { PlaygroundComponent } from './playground.component';
import { DetailsComponent } from './details/details.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { TimeZoneInfoComponent } from './components/time-zone-info/time-zone-info.component';
import { CountryInfoModelNamePipe } from './components/country-info/country-info-model-name.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbTabsetModule,
        ComponentsModule,
        TimeZoneRoutingModule
    ],
    declarations: [
        CountryInfoModelNamePipe,
        PlaygroundComponent,
        DetailsComponent,
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
