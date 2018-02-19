import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CountryInfoModel } from './country-info-model';

@Component({
    selector: 'app-views-time-zone-country-info',
    templateUrl: './country-info.component.html',
    styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

    constructor() {
    }

    public model$ = new BehaviorSubject<CountryInfoModel>(undefined);

    @Input('selectedCountry')
    public set model(value: CountryInfoModel) { this.model$.next(value); }
    public get model(): CountryInfoModel { return this.model$.value; }

    public ngOnInit() {
    }

}
