import { BehaviorSubject } from 'rxjs/Rx';

export interface ICountryInfoModel {
    code: string;
    name: string;
}

export interface IStateSettings {
    isOpen: boolean;
}

export class CountryInfoModel implements ICountryInfoModel {
    constructor(public code: string, public name: string) { }
}

export class InternalModel<TData extends ICountryInfoModel, TStateSettings extends IStateSettings> {

    constructor(data: TData, uiOptions: Partial<IStateSettings> = {}) {
        this.data = data;
        this.state = Object.assign({}, InternalModel.DEFAULT_UI_SETTINGS, uiOptions) as TStateSettings;
    }

    private static readonly DEFAULT_UI_SETTINGS: IStateSettings = {
        isOpen: true
    };

    public data$ = new BehaviorSubject<TData>(undefined);
    public get data(): TData { return this.data$.value; }
    public set data(value: TData) { this.data$.next(value); }

    public state$ = new BehaviorSubject<TStateSettings>(undefined);
    public get state(): TStateSettings { return this.state$.value; }
    public set state(value: TStateSettings) { this.state$.next(value); }
}
