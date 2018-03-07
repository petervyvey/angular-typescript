import { ActionReducer } from '@ngrx/store';
import { Actions } from '../actions';
import * as Action from '../actions/actions.module';
import * as Model from '../models/models.module';

export interface ITimeZoneState {
    countries: Model.CountryInfo[];
}

export const initialState: ITimeZoneState = {
    countries: []
};

export const reducer: ActionReducer<ITimeZoneState> = (state: ITimeZoneState = initialState, action: Actions) => {

    switch (action.type) {

        case Action.SET_COUNTRIES: {
            const payload = action.payload as Action.ISetCountriesPayload;
            // state.countries = [].concat(payload.countries.map(x => Object.assign({}, x)));
            // state = Object.assign({}, state);

            return {
                ...state,
                countries: payload.countries
            };
        }

        default:
            return state;

    }
};

