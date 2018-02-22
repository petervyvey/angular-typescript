import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule, Logger, HttpLoggingInterceptor } from '../shared.module';

import { ApplicationComponent } from './application.component';
import { ApplicationRouterModule } from './application.routing';

import { ComponentsModule } from '../components/components.module';
import { ViewsModule } from '../views/views.module';

@NgModule({
    declarations: [
        ApplicationComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,

        SharedModule,

        NgbModule.forRoot(),
        BrowserModule,

        ApplicationRouterModule,
        ComponentsModule,
        ViewsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpLoggingInterceptor,
            multi: true
        },
    ],
    bootstrap: [ApplicationComponent]
})
export class Module {
    constructor() {
        Logger.info('Application:ApplicationModule', 'done');
    }
}
