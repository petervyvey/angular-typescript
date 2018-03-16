import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TimeZoneDbStoreService } from '@services/time-zone-db-store/time-zone-db-store.module';
import { IState } from '@store/state';
import { CountryInfo } from '@store/time-zone/models/country-info';
import { SetCountries } from '@store/time-zone/actions/set-countries.action';
import { RetrievingCountries } from '@store/time-zone/actions/actions.module';
import { Scheduler } from 'rxjs/Rx';

@Component({
    selector: 'app-views-time-zone',
    templateUrl: './time-zone.component.html',
    styleUrls: ['./time-zone.component.scss']
})
export class TimeZoneComponent implements OnInit {

    constructor(private store: Store<IState>, private service: TimeZoneDbStoreService) { }

    public ngOnInit() {
        console.log('store', this.store);
        const state = this.store.select(x => x.timeZone);

        state.subscribe(x => console.log('state', x));
        state.dispatch(new RetrievingCountries());
        this.service.getTimeZones()
            .observeOn(Scheduler.async)
            .map(x => x.zones.map(z => new CountryInfo(z.countryCode, z.countryName)))
            .do(x => state.dispatch(new SetCountries({countries: x})))
            .subscribe();
    }

}
