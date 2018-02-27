import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@components/components.module';
import { TimeZoneRoutingModule } from './time-zone.routing';
import { TimeZoneComponent } from './time-zone.component';
import { DetailsModule } from './details/details.module';
import { Logger } from '../../shared.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        TimeZoneRoutingModule,
        DetailsModule
    ],
    declarations: [
        TimeZoneComponent
    ]
})
class TimeZoneModule {
    constructor() {
        Logger.info('Views:TimeZoneModule', 'done');
    }
}

export {
    TimeZoneModule
};
