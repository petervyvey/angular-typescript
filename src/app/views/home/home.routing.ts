
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { Logger } from '../../shared.module';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
    constructor() {
        Logger.info('Views:HomeRoutingModule', 'done');
    }
}
