import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// end bootstrap

// material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Multy Select Form 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
 // For Multy Select

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
import { AddoffersComponent } from './registration/addoffers/addoffers.component';
import { HappyhoursComponent } from './registration/happyhours/happyhours.component';
import { RegistrationcompletedComponent } from './registration/registrationcompleted/registrationcompleted.component';
import { AddfoodsComponent } from './registration/addfoods/addfoods.component';
import { DrinkcategoryComponent } from './registration/drinkcategory/drinkcategory.component';
@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    SubscriptionComponent,
    HeaderComponent,
    FooterComponent,
    BasicdetailsComponent,
    AdddrinksComponent,
    AddmoreinformationComponent,
    AddoffersComponent,
    HappyhoursComponent,
    RegistrationcompletedComponent,
    AddfoodsComponent,
    DrinkcategoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // For Multy Select
    ReactiveFormsModule, // For Multy Select
    MatSelectModule // For Multy Select

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
