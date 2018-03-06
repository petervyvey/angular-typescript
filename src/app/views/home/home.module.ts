import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { Logger } from '@shared/shared.module';

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
        Logger.info('Views:HomeModule', 'done');
    }
}
