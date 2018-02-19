import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Logger } from '../foundation/logger';

import { ApplicationComponent } from './application.component';
import { ApplicationRouterModule } from './application.routing';
import { ComponentsModule } from '../components/components.module';
import { ViewsModule } from '../views/views.module';

import { ApplicationLoggingModule } from './application-logging.module';

import { environment } from './../../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        ApplicationComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgbModule.forRoot(),
        BrowserModule,

        ApplicationLoggingModule,
        ApplicationRouterModule,
        ComponentsModule,
        ViewsModule
    ],
    providers: [],
    bootstrap: [ApplicationComponent]
})
export class Module {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(environment.defaultUiLanguage);
        this.translate.use(environment.defaultUiLanguage);

        Logger.Info('Application:ApplicationModule', 'done');
    }
}
