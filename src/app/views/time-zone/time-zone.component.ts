import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { TimeZoneDbStoreService } from '@services/time-zone-db-store/time-zone-db-store.module';
import { IState } from '@store/state';
import { CountryInfo } from '@store/time-zone/models/country-info';
import { SetCountries } from '@store/time-zone/actions/set-countries.action';
import { RetrievingCountries } from '@store/time-zone/actions/actions.module';
import { Scheduler, Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-views-time-zone',
    templateUrl: './time-zone.component.html',
    styleUrls: ['./time-zone.component.scss']
})
export class TimeZoneComponent implements OnInit, OnDestroy {

    constructor(private store: Store<IState>, private service: TimeZoneDbStoreService) { }

    public destroy$ = new ReplaySubject<boolean>();

    public ngOnInit() {
        const state = this.store.select(x => x.timeZone);

        state
            .takeUntil(this.destroy$)
            .do(s => console.log('state', s))
            .subscribe();

        state.
            take(1)
            .filter(tz => tz.countries && !tz.countries.length)
            .do(() => state.dispatch(new RetrievingCountries()))
            .switchMap(() =>
                this.service.getTimeZones()
                    .map(tz => tz.zones.map(z => new CountryInfo(z.countryCode, z.countryName)))
                    .do(c => state.dispatch(new SetCountries({ countries: c })))
            )
            .subscribe();
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
    }

}
