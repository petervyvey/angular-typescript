import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';
import { ComponentsModule } from '../components/components.module';
import { VieuwsModule } from '../views/views.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    ApplicationRoutingModule,

    BrowserModule,
    ComponentsModule,
    VieuwsModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class Module { }
