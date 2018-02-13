
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';
import { NgModule } from '@angular/core';

import { Log } from 'ng2-logger';
import { Logger } from '../foundation/logger';

import { environment } from './../../environments/environment';

@NgModule()
export class ApplicationLoggingModule {

  constructor(
    private router: Router,
  ) {
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

    Logger.Info('Application:ApplicationLoggingModule', 'done');
  }
}
