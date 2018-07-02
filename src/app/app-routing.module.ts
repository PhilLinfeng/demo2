import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertComponent } from './components/dashboard/alert/alert.component';
import { ViewComponent }  from './components/dashboard/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/alert', pathMatch: 'full' },
  { path: 'alert', component: AlertComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
