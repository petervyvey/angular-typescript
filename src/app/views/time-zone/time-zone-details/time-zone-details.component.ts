import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs/Rx';
import { CountryInfoModel } from '../components/country-info/country-info-model';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-time-zone-details',
    templateUrl: './time-zone-details.component.html',
    styleUrls: ['./time-zone-details.component.scss']
})
export class TimeZoneDetailsComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute) {
    }

    private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>();
    private timeZoneId: string;

    public countryInfoModel: CountryInfoModel;

    public ngOnInit() {
        this.route.params
            .takeUntil(this.destroy$)
            .subscribe(x => this.timeZoneId = x.timeZoneId);

        Observable.timer(5000)
            .subscribe(x => {
                this.countryInfoModel = new CountryInfoModel('be', 'Belgium');
            });
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
    }
}
