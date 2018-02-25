import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs/Rx';
import { CountryInfoModel } from '../components/country-info/country-info-model';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-view-playground-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute) {
    }

    private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>();
    private timeZoneId: string;

    public countryInfoModel: CountryInfoModel;

    public ngOnInit() {
        this.route.params
            .takeUntil(this.destroy$)
            .subscribe(x => this.timeZoneId = x.timeZoneId);
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
    }
}
