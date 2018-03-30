import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QrscannerService } from '../services/qrscanner.service';

@Component({
  selector: 'app-gate-operator',
  templateUrl: './gate-operator.component.html',
  styleUrls: ['./gate-operator.component.css']
})
export class GateOperatorComponent implements OnInit {
  placeOrderForm: FormGroup;
  public datacode = null;
  public qrcode = null;
  constructor(public QrScanner: QrscannerService) { }

  ngOnInit() {
    this.placeOrderForm = new FormGroup({
      type_of_commodity: new FormControl('', []),
      total_weight: new FormControl('', []),
      vehicle_number: new FormControl('', []),
      miller: new FormControl('', [])
    });
  }

  public createToken(data) {
    console.log(data);
   this.datacode = JSON.stringify(data);
   const primeString = this.QrScanner.config['gate-key'] * this.QrScanner.config['private-key'];
   this.qrcode = String(primeString);
  }
}
