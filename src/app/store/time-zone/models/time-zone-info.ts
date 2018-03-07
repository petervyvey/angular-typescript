
export class TimeZoneInfo  {
    constructor(public countryCode: string, public offset: number, public name: string) { }

    public isSelected = false;
}
