import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaygroundComponent } from './playground.component';
import { Logger } from '../../shared.module';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {
        path: 'playground',
        component: PlaygroundComponent
    },
    {
        path: 'playground/:timeZoneId',
        component: PlaygroundComponent,
        children: [
            {
                path: '**',
                redirectTo: 'details'
            },
            {
                path: 'details',
                component: DetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimeZoneRoutingModule {
    constructor() {
        Logger.info('Views:TimeZoneRoutingModule', 'done');
    }
}
