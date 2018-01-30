
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ContentComponent } from './layout/content/content.component';

import { HomeModule } from './home/home.module';
import { TimeZoneModule } from './time-zone/time-zone.module';
import { PopulationModule } from './population/population.module';

@NgModule({
  imports: [
    RouterModule,
    HomeModule,
    TimeZoneModule,
    PopulationModule
  ],
  declarations: [
    LayoutComponent,
    NavigationComponent,
    ContentComponent
  ],
  exports: [
    LayoutComponent,
    NavigationComponent,
    ContentComponent
  ]
})
export class VieuwsModule { }
