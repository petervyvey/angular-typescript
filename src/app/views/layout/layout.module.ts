
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logger } from '../../shared.module';

import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';

@NgModule({
    imports: [
        RouterModule
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
export class LayoutModule {
    constructor() {
        Logger.Info('Views:LayoutModule', 'done');
    }
}
