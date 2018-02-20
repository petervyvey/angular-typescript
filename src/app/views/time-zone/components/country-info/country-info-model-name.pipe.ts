import { Pipe, PipeTransform } from '@angular/core';
import { CountryInfoModel } from './country-info-model';

@Pipe({
    name: 'countryname'
})
export class CountryInfoModelNamePipe implements PipeTransform {

    public transform(value: CountryInfoModel, args?: any): any {
        debugger;
        if (!value) { return value; }

        return value.name;
    }

}
