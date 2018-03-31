import { LogoutService } from './../services/logout.service';
import { ProgressBarService } from './../shared/progress-bar.service';
import { QrscannerService } from './../services/qrscanner.service';
import { PouchDbService } from './../services/pouch-db.service';
import { AuthHttp } from 'angular2-jwt';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
import { QRCodeModule } from 'angular2-qrcode';
import { NgxZxingModule } from 'ngx-zxing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GateEntryComponent } from './gate-entry/gate-entry.component';

import { GateOperatorRoutingModule } from './gate-operator-routing.module';
import { GateOperatorService } from './gate-operator.service';
import { SharedModule } from '../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TokenComponent } from './token/token.component';
import { authHttpServiceFactory } from '../app.module';

@NgModule({
  imports: [
    GateOperatorRoutingModule,
    HttpModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    NgxZxingModule.forRoot(),
    QRCodeModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  declarations: [DashboardComponent, GateEntryComponent, TokenComponent],
  providers: [GateOperatorService, PouchDbService, QrscannerService, ProgressBarService, LogoutService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]}],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GateOperatorModule { }
