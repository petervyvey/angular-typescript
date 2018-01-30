
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ContentComponent } from './layout/content/content.component';

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
export class VieuwsModule {

}
