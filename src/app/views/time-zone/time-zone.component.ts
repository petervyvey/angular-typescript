import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TimeZoneDbStoreService } from '@services/time-zone-db-store/time-zone-db-store.module';
import { IState } from '@store/state';

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

        this.service.getTimeZones()
            .subscribe(x => console.log('done', x));
    }

}
