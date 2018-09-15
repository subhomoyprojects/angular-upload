import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// end bootstrap

import { AppComponent } from './app.component';
import { Step1Component } from './registration/step1/step1.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { SubscriptionComponent } from './registration/subscription/subscription.component';
import { HeaderComponent } from './registration/header/header.component';
import { FooterComponent } from './registration/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    SubscriptionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
