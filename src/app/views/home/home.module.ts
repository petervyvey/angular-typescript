
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { Logger } from '../../shared.module';

@NgModule({
  imports: [
    TranslateModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    TranslateModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor() {
    Logger.Info('Views:HomeModule', 'done');
  }
}
