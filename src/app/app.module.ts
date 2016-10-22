import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {AppComponent} from './app.component';
import {MkTestManagerRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    MkTestManagerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

