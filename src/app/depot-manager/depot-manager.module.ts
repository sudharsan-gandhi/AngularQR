import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotManagerRoutingModule } from './depot-manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepotManagerService } from './depot-manager.service';
import { SharedModule } from '../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MillerRequestsComponent } from './miller-requests/miller-requests.component';
import { CommodityStatusComponent } from './commodity-status/commodity-status.component';
import { RecordsComponent } from './records/records.component';
import { ShedDetailsComponent } from './shed-details/shed-details.component';
import { ConsumerRequestsComponent } from './consumer-requests/consumer-requests.component';

@NgModule({
  imports: [
    CommonModule,
    DepotManagerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [DashboardComponent, MillerRequestsComponent, CommodityStatusComponent, RecordsComponent
    , ShedDetailsComponent, ConsumerRequestsComponent],
    providers: [DepotManagerService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DepotManagerModule { }
