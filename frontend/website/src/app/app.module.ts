import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuhModule } from 'menuh/dist/menuh.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuhModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
