import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gate-operator',
  templateUrl: './gate-operator.component.html',
  styleUrls: ['./gate-operator.component.css']
})
export class GateOperatorComponent implements OnInit {
  placeOrderForm: FormGroup;
  private prime = 2;
  private secret = 199;
  public datacode = null;
  public qrcode = null;
  constructor() { }

  ngOnInit() {
    this.placeOrderForm = new FormGroup({
      type_of_commodity: new FormControl('', []),
      total_weight: new FormControl('', []),
      vehicle_number: new FormControl('', []),
      miller: new FormControl('', []),
      total_cost: new FormControl('', []),
    });
  }

  public createToken(data) {
    console.log(data);
   this.datacode = JSON.stringify(data);
   const primeString = this.prime * this.secret;
   this.qrcode = String(primeString);
  }
}
