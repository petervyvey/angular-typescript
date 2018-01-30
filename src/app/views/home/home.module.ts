
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent }
    ]),
    TranslateModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    RouterModule,
    TranslateModule
  ]
})
export class HomeModule { }
