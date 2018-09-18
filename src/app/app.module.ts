import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// end bootstrap

// material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// end material

import { AppComponent } from './app.component';
import { Step1Component } from './registration/step1/step1.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { SubscriptionComponent } from './registration/subscription/subscription.component';
import { HeaderComponent } from './registration/header/header.component';
import { FooterComponent } from './registration/footer/footer.component';
import { BasicdetailsComponent } from './registration/basicdetails/basicdetails.component';
import { AdddrinksComponent } from './registration/adddrinks/adddrinks.component';
import { AddmoreinformationComponent } from './registration/addmoreinformation/addmoreinformation.component';
@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    SubscriptionComponent,
    HeaderComponent,
    FooterComponent,
    BasicdetailsComponent,
    AdddrinksComponent,
    AddmoreinformationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
