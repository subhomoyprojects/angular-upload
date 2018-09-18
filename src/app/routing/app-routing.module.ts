import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Step1Component }      from '../registration/step1/step1.component';
import { SubscriptionComponent }      from '../registration/subscription/subscription.component';
import { BasicdetailsComponent }      from '../registration/basicdetails/basicdetails.component';
import { AdddrinksComponent }      from '../registration/adddrinks/adddrinks.component';
import { AddmoreinformationComponent }      from '../registration/addmoreinformation/addmoreinformation.component';

const routes: Routes = [
  { path: '', redirectTo: '/registration/step1', pathMatch: 'full' },
  { path: 'registration/step1', component: Step1Component },
  { path: 'registration/step2/subscription', component: SubscriptionComponent },
  { path: 'registration/step2/basicdetails', component: BasicdetailsComponent },
  { path: 'registration/step2/adddrinks', component: AdddrinksComponent },
  { path: 'registration/step2/addmoreinfo', component: AddmoreinformationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{
    useHash:true
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}