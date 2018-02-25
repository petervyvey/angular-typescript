import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { LoggingModule, Logger, HttpLoggingInterceptor } from './services/logging/logging.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        LoggingModule
    ],
    providers: [
        TranslateService
    ],
    exports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        LoggingModule
    ]
})
class SharedModule {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(environment.defaultUiLanguage);
        this.translate.use(environment.defaultUiLanguage);

        Logger.info('Application:ApplicationModule', 'done');
    }
}

export { SharedModule, TranslateService, Logger, HttpLoggingInterceptor };
