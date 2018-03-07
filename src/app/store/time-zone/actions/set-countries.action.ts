import { Action } from '@ngrx/store';
import { Utils } from '@lib';

import { CountryInfo } from '@store/time-zone/models/country-info';

export const SET_COUNTRIES = Utils.type('SET_COUNTRIES');

export interface ISetCountriesPayload {
    countries: CountryInfo[];
}

export class SetCountries implements Action {
    constructor(public payload: ISetCountriesPayload) { }

    public type = SET_COUNTRIES;
}
