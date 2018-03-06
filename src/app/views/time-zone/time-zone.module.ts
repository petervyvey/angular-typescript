import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger } from '@shared/shared.module';

import { ComponentsModule } from '@components/components.module';
import { TimeZoneRoutingModule } from './time-zone.routing';
import { TimeZoneComponent } from './time-zone.component';
import { DetailsModule } from './details/details.module';
import { TimeZoneDbStoreModule } from '@services/time-zone-db-store/time-zone-db-store.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        TimeZoneDbStoreModule,
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
