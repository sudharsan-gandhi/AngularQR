import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { LogoutService } from './services/logout.service';
import { ProgressBarService } from './shared/progress-bar.service';
import { CommonModule } from '@angular/common';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { PouchDbService } from './services/pouch-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxZxingModule } from 'ngx-zxing';
import { GateOperatorComponent } from './gate-operator-component/gate-operator.component';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { DepotOperatorComponent } from './depot-operator-component/depot-operator.component';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QrscannerService } from './services/qrscanner.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => sessionStorage.getItem('token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    GateOperatorComponent,
    DepotOperatorComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    RoutingModule,
    NgxZxingModule.forRoot(),
    QRCodeModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    MatButtonModule,
    MatCheckboxModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [PouchDbService, QrscannerService, ProgressBarService, LogoutService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
