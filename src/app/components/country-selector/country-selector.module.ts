import { NgModule } from '@angular/core';
import { CountrySelectorComponent } from './country-selector.component';

@NgModule({
    declarations: [
        CountrySelectorComponent
    ],
    exports: [
        CountrySelectorComponent
    ]
})
class CountrySelectorModule {}

export {
    CountrySelectorModule
};
