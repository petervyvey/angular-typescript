
import { NgModule } from '@angular/core';
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
  exports: [
    RouterModule
  ]
})
export class ApplicationRouterModule {
  constructor() {
    Logger.Info('Application:ApplicationRouterModule', 'done');
  }
}
