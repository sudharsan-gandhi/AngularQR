import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMillerRequestComponent } from './view-miller-request/view-miller-request.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorDashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: ViewMillerRequestComponent
      },
      {
        path: '',
        component: ViewMillerRequestComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DepotOperatorRoutingModule { }
