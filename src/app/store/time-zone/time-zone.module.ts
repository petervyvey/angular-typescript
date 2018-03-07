import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as Reducer from './reducers/reducers.module';

@NgModule({
  imports: [
      StoreModule.forFeature('timeZone', Reducer.TimeZone.reducer),
  ],
  declarations: []
})
export class TimeZoneModule { }
