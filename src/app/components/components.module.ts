import { NgModule } from '@angular/core';

import { CountrySelectorModule } from './country-selector/country-selector.module';
import { Logger } from '../shared.module';

@NgModule({
    imports: [
        CountrySelectorModule
    ],
    exports: [
        CountrySelectorModule
    ]
})
export class ComponentsModule {
    constructor() {
        Logger.info('Components:ComponentsModule', 'done');
    }
}
