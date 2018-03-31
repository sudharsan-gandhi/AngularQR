import { Type } from './../../shared/enums/type.enum';
import { QrscannerService } from './../../services/qrscanner.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PouchDbService } from './../../services/pouch-db.service';
import { Component, OnInit } from '@angular/core';
import { Status } from '../../shared/enums/status.enum';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-view-miller-request',
  templateUrl: './view-miller-request.component.html',
  styleUrls: ['./view-miller-request.component.scss']
})
export class ViewMillerRequestComponent implements OnInit {

  result: any;
  type: string;
  docs: any[] = new Array();
  success: string;
  measuredWeightForm: FormGroup;
  showScanner = false;
  depotForm: FormGroup;
  datacode = null;
  qrcode = null;
  constructor(private db: PouchDbService, private logout: LogoutService, private QrScanner: QrscannerService) { }

  ngOnInit() {
    this.success = sessionStorage.getItem('success');
    setTimeout(() => {
      this.success = 'false';
    }, 1500);
    this.measuredWeightForm = new FormGroup({
      'measuredWeight': new FormControl(null)
    });
    this.type = Status.active;
    // this.db.deleteAll();
    this.fetch(this.type);
    this.db.sync();
  }

  fetch(type: string) {
    this.db.fetch().then(data => {
      console.log('docs ', data);
      data.rows.forEach(datum => {
        console.log('element ', datum.doc);
        if (datum.doc.status === type) {
          this.docs.push(datum.doc);
        }
      });
      console.log('docs pushed', this.docs);
    }).catch(err => {
      console.log('error ', err);
    });
    console.log('docs ', this.docs);
  }

  submitMeasuredWeight(value, doc) {
    console.log('value ', value, ' doc ', doc);
    doc.measuredWeight = value.measuredWeight;
    const measuredWeight = doc.measuredWeight;
    const actualWeight = doc.total_weight;
    const transitLoss = ((actualWeight - measuredWeight) / (actualWeight)) * 100;
    doc.transitLoss = transitLoss.toFixed(2);
    console.log(' revised doc ', doc);
    this.db.put(doc._id, doc).then(response => {
      console.log('put response ', response);
    }).catch(err => {
      console.log(' error ', err);
    });
  }
  public signout() {
    this.logout.logout();
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
    if (this.QrScanner.qrResult !== '') {
      const qrdata = JSON.parse(this.QrScanner.qrResult);
      qrdata['operator'] = data;
      qrdata['primeString'] = qrdata['primeString'] * this.QrScanner.config['depot-op-key'];
      this.createToken(qrdata);
    } else {
      alert('take the qr scan before submitting the form');
    }
  }

  public createToken(data) {
    console.log(data);
    this.QrScanner.qrResult = JSON.stringify(data);
    this.datacode = JSON.stringify(data);
    console.log('data code', this.datacode);
    // this.QrScanner.taskList();
  }

  handleQrCodeResult(event) {
    this.QrScanner.handleQrCodeResult(event);
    this.result = JSON.parse(event);
    console.log('parsed result', this.result);
    this.docs.push(this.result);
    this.db.push(this.docs);
    this.fetch('all');
  }
  public getImage(event, doc) {
    console.log('event', event, 'doc', doc);
    this.result = JSON.stringify(doc);
    const image = event.path[0].src;
    const Pagelink = 'about:blank';
    const pwa = window.open(Pagelink, '_new');
    pwa.document.open();
    pwa.document.write(this.VoucherSourcetoPrint(image));
    pwa.document.close();
  }
  public VoucherSourcetoPrint(source) {
    return `<html>
    <head>
    <script>
    function step1(){
      setTimeout(step2(), 10);}
      function step2(){window.print();window.close()
      }
      </script>
      </head>
      <body onload=step1()>
      <h3> Gate Token </h3>
      <img style="padding-left: 40% ; padding-top: 50%; height:300px; width:300px;" src="${source}"/>
      <br>
      <br>
      <br>
      <br>
      <h4>
      ${this.result}
      </h4>
      </body>
      </html>`;
  }
}
