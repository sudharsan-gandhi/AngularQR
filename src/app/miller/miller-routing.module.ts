import { PlaceOrderComponent } from './place-order/place-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRequestComponent } from './view-request/view-request.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: PlaceOrderComponent
      },
      {
        path: 'requests',
        component: ViewRequestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MillerRoutingModule { }
