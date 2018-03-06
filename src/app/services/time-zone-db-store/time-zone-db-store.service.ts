import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '@environments/environment';

import { IGetTimeZonesResponse } from '@services/time-zone-db-store/time-zone-db-response';

@Injectable()
export class TimeZoneDbStoreService {

    constructor(private http: HttpClient) { }

    public getTimeZones(): Observable<IGetTimeZonesResponse> {
        return this.http
            .get(`${environment.timeZoneDb.url}/list-time-zone?key=${environment.timeZoneDb.apiKey}&format=${environment.timeZoneDb.format}`)
            .map(x => x as IGetTimeZonesResponse);
    }

}
