import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotOperatorRoutingModule } from './depot-operator-routing.module';
import { ViewMillerRequestComponent } from './view-miller-request/view-miller-request.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';

import { LogoutService } from './../services/logout.service';
import { ProgressBarService } from './../shared/progress-bar.service';
import { QrscannerService } from './../services/qrscanner.service';
import { PouchDbService } from './../services/pouch-db.service';
import { AuthHttp } from 'angular2-jwt';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
import { QRCodeModule } from 'angular2-qrcode';
import { NgxZxingModule } from 'ngx-zxing';

import { SharedModule } from '../shared/shared.module';
import { authHttpServiceFactory } from '../app.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DepotOperatorRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    NgxZxingModule.forRoot(),
    QRCodeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  declarations: [ViewMillerRequestComponent, OperatorDashboardComponent],
  providers: [PouchDbService, QrscannerService, ProgressBarService, LogoutService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  schemas: [NO_ERRORS_SCHEMA]
})

export class DepotOperatorModule { }
