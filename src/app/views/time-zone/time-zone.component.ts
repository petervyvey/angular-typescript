import { Component, OnInit } from '@angular/core';
import { TimeZoneDbStoreService } from '@services/time-zone-db-store/time-zone-db-store.module';

@Component({
    selector: 'app-views-time-zone',
    templateUrl: './time-zone.component.html',
    styleUrls: ['./time-zone.component.scss']
})
export class TimeZoneComponent implements OnInit {

    constructor(private service: TimeZoneDbStoreService) { }

    public ngOnInit() {
        this.service.getTimeZones()
            .subscribe(x => console.log('done', x));
    }

}
