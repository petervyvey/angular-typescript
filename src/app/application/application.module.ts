import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApplicationComponent } from './application.component';
import { ApplicationRouterModule } from './application.routing';
import { ComponentsModule } from '../components/components.module';
import { VieuwsModule } from '../views/views.module';

import { Log } from 'ng2-logger';
import { Logger } from '../foundation/logger';

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

    ApplicationRouterModule,
    ComponentsModule,
    VieuwsModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class Module {
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(environment.defaultUiLanguage);
    this.translate.use(environment.defaultUiLanguage);

    const appLog: Log = Log.create(environment.logger.sinks.application.name, ...environment.logger.sinks.application.levels);
    const restLog: Log = Log.create(environment.logger.sinks.rest.name, ...environment.logger.sinks.application.levels);
    const routerLog: Log = Log.create(environment.logger.sinks.router.name, ...environment.logger.sinks.application.levels);
    const modelLog: Log = Log.create(environment.logger.sinks.model.name, ...environment.logger.sinks.application.levels);

    Logger.AddLog(environment.logger.sinks.application.name, appLog, true);
    Logger.AddLog(environment.logger.sinks.rest.name, restLog, false);
    Logger.AddLog(environment.logger.sinks.router.name, routerLog, false);
    Logger.AddLog(environment.logger.sinks.model.name, modelLog, false);

    const message = 'Router.events';

    this.router.events.subscribe(event => {
      /* tslint:disable:no-any */
      if (event instanceof NavigationStart) {
        Logger.Sinks[environment.logger.sinks.router.name].Debug(message, event, (event as any).url);
      } else if (event instanceof NavigationEnd) {
        Logger.Sinks[environment.logger.sinks.router.name].Info(message, event, (event as any).url);
      } else if (event instanceof NavigationCancel) {
        Logger.Sinks[environment.logger.sinks.router.name].Warn(message, event, (event as any).url);
      } else if (event instanceof NavigationError) {
        Logger.Sinks[environment.logger.sinks.router.name].Error(message, event, (event as any).url);
      } else if (event instanceof RoutesRecognized) {
        Logger.Sinks[environment.logger.sinks.router.name].Debug(message, event, (event as any).url);
      }
      /* tslint:enable:no-any */
    });

    Logger.Sinks[environment.logger.sinks.router.name].Info(message, 'subscribed');

    Logger.Info('App:ApplicationModule', 'done');
  }
}
