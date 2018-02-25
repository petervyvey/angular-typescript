import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs/Rx';
import { CountryInfoModel, InternalModel, ICountryInfoModel, IStateSettings } from './country-info-model';

@Component({
    selector: 'app-views-playground-country-info',
    templateUrl: './country-info.component.html',
    styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit, OnDestroy {

    constructor() {
    }

    private destroy$ = new ReplaySubject<boolean>();
    public timer$ = Observable.timer(1000, 1000);

    public everyMinute$ =
        this.timer$
            .throttleTime(60000)
            .map(seconds => Math.floor(seconds / 60));

    public selectedCountry$ = new BehaviorSubject<CountryInfoModel>(undefined);
    @Input()
    public set selectedCountry(value: CountryInfoModel) { this.selectedCountry$.next(value); }

    public model: InternalModel<ICountryInfoModel, IStateSettings>;

    public ngOnInit() {
        this.selectedCountry$
            .takeUntil(this.destroy$)
            .subscribe(selected => this.model = selected ? new InternalModel<ICountryInfoModel, IStateSettings>(selected, { isOpen: true }) : null);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
    }

}
