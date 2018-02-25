import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SearchTextBoxComponent } from './search-text-box/search-text-box.component';
import * as SearchTextBox from './search-text-box/search-text-box-model';

import { CountrySelectorModule } from './country-selector/country-selector.module';
import { Logger } from '../shared.module';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
    imports: [
        CountrySelectorModule,
        FormsModule,
        AngularFontAwesomeModule,
    ],
    exports: [
        SearchTextBoxComponent,
        CountrySelectorModule,
        TimeLineComponent
    ],
    declarations: [
        TimeLineComponent,
        SearchTextBoxComponent
    ]
})
class ComponentsModule {
    constructor() {
        Logger.info('Components:ComponentsModule', 'done');
    }
}

export {
    ComponentsModule,
    SearchTextBox
};
