import { Component, OnInit, Version, OnChanges } from '@angular/core';
import { QrscannerService } from '../services/qrscanner.service';

@Component({
  selector: 'app-depot-operator',
  templateUrl: './depot-operator.component.html',
  styleUrls: ['./depot-operator.component.css']
})
export class DepotOperatorComponent implements OnInit, OnChanges {
    showScanner = false;
    ngOnInit() {}
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

}
