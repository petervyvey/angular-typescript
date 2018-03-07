
import { TimeZoneInfo } from './time-zone-info';

export class CountryInfo {
    constructor(public code: string, public name: string) { }

    public timeZones: TimeZoneInfo[];

    public isSelected = false;
}
