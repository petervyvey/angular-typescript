import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { Logger } from '../../../shared.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {
    constructor() {
        Logger.info('Views:TimeZone:DetailsModule', 'done');
    }
}
