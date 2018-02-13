
import { NgModule } from '@angular/core';

import { Logger } from '../shared.module';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { TimeZoneModule } from './time-zone/time-zone.module';
import { PopulationModule } from './population/population.module';

@NgModule({
  imports: [
    LayoutModule,
    HomeModule,
    TimeZoneModule,
    PopulationModule
  ],
  exports: [
    LayoutModule,
    HomeModule,
    TimeZoneModule,
    PopulationModule
  ]
})
export class VieuwsModule {
  constructor() {
    Logger.Info('Views:ViewsModule', 'done');
  }
}
