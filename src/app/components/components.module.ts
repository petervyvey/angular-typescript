
import { NgModule } from '@angular/core';

import * as CountrySelector from './country-selector';
import { Logger } from '../shared.module';

export {
    CountrySelector
};

@NgModule({
    declarations: [
        CountrySelector.CountrySelectorComponent
    ]
})
export class ComponentsModule {
    constructor() {
        Logger.Info('Components:ComponentsModule', 'done');
    }
}
