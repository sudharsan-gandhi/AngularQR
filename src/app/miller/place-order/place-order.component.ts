import { Type } from './../../shared/enums/type.enum';
import { Status } from './../../shared/enums/status.enum';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from './../../model/order.interface';
import { PouchDbService } from '../../services/pouch-db.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  placeOrderForm: FormGroup;
  success: string;
  placeOrderSuccess: boolean;
  constructor(private db: PouchDbService, private route: Router) {
    this.placeOrderSuccess = false;
  }

  ngOnInit() {
    this.success = sessionStorage.getItem('success');
    setTimeout(() => {
      this.success = 'false';
    }, 1500);
    sessionStorage.setItem('success', 'false');
    this.placeOrderForm = new FormGroup({
      type_of_commodity: new FormControl('', []),
      total_weight: new FormControl('', []),
      total_number_of_bags: new FormControl('', []),
      mode_of_transport: new FormControl('', []),
      total_cost: new FormControl('', []),
    });
  }
  placeorder(order) {
    order.status = Status.submitted;
    order.userId = sessionStorage.getItem('userId');
    order.type = Type.millerRequest;
    this.placeOrderSuccess = true;
    console.log('order:', order);
    this.db.push(order)
      .then((data) => console.log('order stored in pouch:', data))
      .catch((err) => console.log('order not stored:', err));
    this.placeOrderForm.reset();
    setTimeout(() => {
      this.placeOrderSuccess = false;
    }, 2500);
  }
}
