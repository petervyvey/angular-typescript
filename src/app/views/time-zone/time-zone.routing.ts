import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimeZoneComponent } from './time-zone.component';
import { Logger } from '../../shared.module';
import { TimeZoneDetailsComponent } from './time-zone-details/time-zone-details.component';

const routes: Routes = [
    {
        path: 'timezone',
        component: TimeZoneComponent
    },
    {
        path: 'timezone/:timeZoneId',
        component: TimeZoneComponent,
        children: [
            {
                path: '**',
                redirectTo: 'details'
            },
            {
                path: 'details',
                component: TimeZoneDetailsComponent
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
        Logger.Info('Views:TimeZoneRoutingModule', 'done');
    }
}
