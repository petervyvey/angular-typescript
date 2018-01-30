
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PopulationComponent } from './population.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'population', component: PopulationComponent }
    ])
  ],
  declarations: [
    PopulationComponent
  ]
})
export class PopulationModule { }
