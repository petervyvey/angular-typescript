import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Logger } from './logger';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        try {
            Logger.sinks['http'].info(req.method, req.url, req.params.toString(), req.body);

            return next.handle(req).do(evt => {
                if (evt instanceof HttpResponse) {
                    Logger.sinks['http'].info(evt.status.toString(), evt.url, evt.body);
                }
            });
        } catch (error) {
            Logger.sinks['http'].error(req.method, req.url, req.params.toString(), req.body, error);
        }

    }
}
