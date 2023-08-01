import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentTemplateComponent } from './component-template/component-template.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    ComponentTemplateComponent
  ],
  imports: [
    BrowserModule,

    MatBadgeModule,
      MatSlideToggleModule,
      MatChipsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
