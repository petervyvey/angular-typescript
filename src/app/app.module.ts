import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { VieuwsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),

    BrowserModule,
    ComponentsModule,
    VieuwsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
