import { TokenComponent } from './token/token.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GateEntryComponent } from './gate-entry/gate-entry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: GateEntryComponent
      },
      {
        path: 'token/:millerid',
        component: TokenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GateOperatorRoutingModule { }
