import { Action } from '@ngrx/store';
import { Utils } from '@lib';

export const RETRIEVING_COUNTRIES = Utils.type('TIME_ZONE.RETRIEVING_COUNTRIES');

export class RetrievingCountries implements Action {
    constructor() { }

    public type = RETRIEVING_COUNTRIES;
}
