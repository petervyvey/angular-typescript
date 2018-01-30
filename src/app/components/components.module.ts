
import { NgModule } from '@angular/core';

import * as CountrySelector from './country-selector';

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
        // Logger.Info('View:AccountModule', 'done');
    }
}
