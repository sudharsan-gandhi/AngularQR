import { Component, OnInit } from '@angular/core';
import { QrscannerService } from '../services/qrscanner.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quality-operator',
  templateUrl: './quality-operator.component.html',
  styleUrls: ['./quality-operator.component.css']
})
export class QualityOperatorComponent implements OnInit {

  constructor(public QrScanner: QrscannerService) { }

  showScanner = false;
  QualityForm: FormGroup;
  datacode = null;
  qrcode = null;
  ngOnInit() {
    this.QualityForm = new FormGroup({
      quality: new FormControl('', []),
      description: new FormControl('', []),
    });
  }
  toggleScan() {
    this.showScanner = !this.showScanner;
    if (!this.showScanner) {
      console.log('in');
      this.QrScanner.reset();
    }
  }
  operatorUpdate(data) {
    console.log(data);
    if (this.QrScanner.qrResult !== '' ) {
      const qrdata = JSON.parse(this.QrScanner.qrResult);
      qrdata['quality'] = data;
      qrdata['primeString'] = qrdata['primeString'] *  this.QrScanner.config['quality-key'];
      this.createToken(qrdata);
    } else {
      alert('take the qr scan before submitting the form');
    }
  }

  public createToken(data) {
    console.log(data);
    this.QrScanner.qrResult = JSON.stringify(data);
   this.datacode = JSON.stringify(data);
   this.QrScanner.taskList();
  }
}
