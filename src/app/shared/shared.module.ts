import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatFormField, MatSelect, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarService } from './progress-bar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [ProgressBarComponent],
  providers: [ProgressBarService],
  exports: [MatProgressBarModule, ProgressBarComponent, MatFormFieldModule, MatSelectModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
