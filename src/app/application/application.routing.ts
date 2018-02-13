
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Logger } from '../shared.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ])
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRouterModule {
  constructor() {
    Logger.Info('Application:ApplicationRouterModule', 'done');
  }
}
