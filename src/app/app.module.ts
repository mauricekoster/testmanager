import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {AppComponent} from './app.component';
import {MkTestManagerRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import { TestPageComponent } from './testpage/testpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProjectMainComponent } from './project-main/project-main.component';
import { AdministrationMainComponent } from './administration-main/administration-main.component';
import { TestmanagerService } from './testmanager.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPageComponent,
    DashboardComponent,
    AdministrationComponent,
    ProjectMainComponent,
    AdministrationMainComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    MkTestManagerRoutingModule
  ],
  providers: [TestmanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

