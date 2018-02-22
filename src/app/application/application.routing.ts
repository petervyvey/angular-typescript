import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logger } from '../shared.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ], {
            paramsInheritanceStrategy: 'always'
        })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
})
export class ApplicationRouterModule {
    constructor() {
        Logger.info('Application:ApplicationRouterModule', 'done');
    }
}
