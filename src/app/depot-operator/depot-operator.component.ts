import { Component, OnInit, Version, OnChanges, Output } from '@angular/core';
import { QrscannerService } from '../services/qrscanner.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-depot-operator',
  templateUrl: './depot-operator.component.html',
  styleUrls: ['./depot-operator.component.css']
})
export class DepotOperatorComponent implements OnInit, OnChanges {


    showScanner = false;
    depotForm: FormGroup;
    datacode = null;
    qrcode = null;
    ngOnInit() {
      this.depotForm = new FormGroup({
        weight_recorded: new FormControl('', []),
        transit_loss: new FormControl('', []),
      });
    }

    constructor(public QrScanner: QrscannerService) { }
    ngOnChanges() {

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
        qrdata['operator'] = data;
        qrdata['primeString'] = qrdata['primeString'] *  this.QrScanner.config['depot-op-key'];
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
