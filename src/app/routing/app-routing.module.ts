import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Step1Component }      from '../registration/step1/step1.component';
import { SubscriptionComponent }      from '../registration/subscription/subscription.component';

const routes: Routes = [
  { path: '', redirectTo: '/registration/step1', pathMatch: 'full' },
  { path: 'registration/step1', component: Step1Component },
  { path: 'registration/step2/subscription', component: SubscriptionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{
    useHash:true
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}