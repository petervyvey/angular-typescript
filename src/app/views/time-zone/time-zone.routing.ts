import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Logger } from '../../shared.module';
import { TimeZoneComponent } from './time-zone.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {
        path: 'timezones',
        component: TimeZoneComponent
    },
    {
        path: 'timezones/:timeZoneId',
        component: TimeZoneComponent,
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
