import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
