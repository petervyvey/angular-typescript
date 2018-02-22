import { NgModule } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { Log } from 'ng2-logger';
import { Logger } from './logger';
import { HttpLoggingInterceptor } from './http-logging-interceptor';
import { environment } from '../../../environments/environment';

@NgModule({
    imports: [],
    declarations: []
})
class LoggingModule {
    constructor(private router: Router) {
        this.configure();
        Logger.info('Application:LoggerModule', 'done');
    }

    private configure() {
        this.configureSinks();
        this.configureRouterSink();
    }

    private configureSinks() {
        const appLog: Log = Log.create(environment.logger.sinks.application.name, ...environment.logger.sinks.application.levels);
        const httpLog: Log = Log.create(environment.logger.sinks.http.name, ...environment.logger.sinks.http.levels);
        const routerLog: Log = Log.create(environment.logger.sinks.router.name, ...environment.logger.sinks.router.levels);
        const storeLog: Log = Log.create(environment.logger.sinks.store.name, ...environment.logger.sinks.store.levels);

        Logger.addLog(environment.logger.sinks.application.name, appLog, true);
        Logger.addLog(environment.logger.sinks.http.name, httpLog, false);
        Logger.addLog(environment.logger.sinks.router.name, routerLog, false);
        Logger.addLog(environment.logger.sinks.store.name, storeLog, false);
    }

    private configureRouterSink() {
        this.router.events.subscribe(event => {
            /* tslint:disable:no-any */
            if (event instanceof NavigationStart) {
                Logger.sinks[environment.logger.sinks.router.name].debug('START', event, (event as any).url);
            } else if (event instanceof NavigationEnd) {
                Logger.sinks[environment.logger.sinks.router.name].info('END', event, (event as any).url);
            } else if (event instanceof NavigationCancel) {
                Logger.sinks[environment.logger.sinks.router.name].warn('CANCEL', event, (event as any).url);
            } else if (event instanceof NavigationError) {
                Logger.sinks[environment.logger.sinks.router.name].error('ERROR', event, (event as any).url);
            } else if (event instanceof RoutesRecognized) {
                Logger.sinks[environment.logger.sinks.router.name].debug('RECOGNIZED', event, (event as any).url);
            }
            /* tslint:enable:no-any */
        });

        Logger.sinks[environment.logger.sinks.router.name].info('CONFIG', 'subscribed');
    }
}

export {
    LoggingModule,
    Logger,
    HttpLoggingInterceptor
};
