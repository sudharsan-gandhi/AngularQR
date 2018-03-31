import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxZxingModule } from 'ngx-zxing';
import { GateOperatorComponent } from './gate-operator/gate-operator.component';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { DepotOperatorComponent } from './depot-operator/depot-operator.component';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QrscannerService } from './services/qrscanner.service';
import { TodoComponent } from './todo/todo.component';
import { QualityOperatorComponent } from './quality-operator/quality-operator.component';




@NgModule({
  declarations: [
    AppComponent,
    GateOperatorComponent,
    DepotOperatorComponent,
    TodoComponent,
    QualityOperatorComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgxZxingModule.forRoot(),
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QrscannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
