import { NgModule } from '@angular/core';

import { Logger } from '@shared/shared.module';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { PlaygroundModule } from './playground/playground.module';
import { TimeZoneModule } from './time-zone/time-zone.module';
import { PopulationModule } from './population/population.module';

@NgModule({
    imports: [
        LayoutModule,
        HomeModule,
        PlaygroundModule,
        TimeZoneModule,
        PopulationModule
    ],
    exports: [
        LayoutModule,
        HomeModule,
        PlaygroundModule,
        TimeZoneModule,
        PopulationModule
    ]
})
export class ViewsModule {
    constructor() {
        Logger.info('Views:ViewsModule', 'done');
    }
}
