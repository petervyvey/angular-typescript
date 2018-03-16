import { ActionReducer } from '@ngrx/store';
import { Actions } from '../actions';
import * as Action from '../actions/actions.module';
import * as Model from '../models/models.module';

export interface ITimeZoneState {
    countries: Model.CountryInfo[];
    pending: boolean;
}

export const initialState: ITimeZoneState = {
    countries: [],
    pending: false
};

export const reducer: ActionReducer<ITimeZoneState> = (state: ITimeZoneState = initialState, action: Actions) => {

    switch (action.type) {

        case Action.RETRIEVING_COUNTRIES:

            return {
                ...state,
                pending: true
            };

        case Action.SET_COUNTRIES:
            const payload = action.payload as Action.ISetCountriesPayload;

            return {
                ...state,
                countries: payload.countries,
                pending: false
            };

        default:
            return state;

    }
};
