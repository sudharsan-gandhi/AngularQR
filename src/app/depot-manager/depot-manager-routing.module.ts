import { MillerRequestsComponent } from './miller-requests/miller-requests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommodityStatusComponent } from './commodity-status/commodity-status.component';
import { RecordsComponent } from './records/records.component';
import { ShedDetailsComponent } from './shed-details/shed-details.component';
import { ConsumerRequestsComponent } from './consumer-requests/consumer-requests.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'commodity-status',
        component: CommodityStatusComponent
      },
      {
        path: 'consumer-requests',
        component: ConsumerRequestsComponent
      },
      {
        path: 'miller-requests',
        component: MillerRequestsComponent
      },
      {
        path: 'dashboard',
        component: MillerRequestsComponent
      },
      {
        path: 'records',
        component: RecordsComponent
      },
      {
        path: 'shed-details',
        component: ShedDetailsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepotManagerRoutingModule { }
