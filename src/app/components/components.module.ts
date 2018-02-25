import { NgModule } from '@angular/core';

import { CountrySelectorModule } from './country-selector/country-selector.module';
import { Logger } from '../shared.module';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
    imports: [
        CountrySelectorModule
    ],
    exports: [
        CountrySelectorModule,
        TimeLineComponent
    ],
    declarations: [
        TimeLineComponent
    ]
})
export class ComponentsModule {
    constructor() {
        Logger.info('Components:ComponentsModule', 'done');
    }
}
