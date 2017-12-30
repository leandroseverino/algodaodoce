import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { MenuItem } from 'primeng/components/common/api';
import { MenuModule, MenubarModule } from 'primeng/primeng';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,  AngularFontAwesomeModule, AccordionModule, MenuModule, MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
