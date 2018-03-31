import { QrscannerService } from './../../services/qrscanner.service';
import { Type } from './../../shared/enums/type.enum';
import { PouchDbService } from './../../services/pouch-db.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  result: any;
  millerId: number;
  doc: any;
  private prime = 2;
  private secret = 199;
  public datacode = null;
  public qrcode = null;
  constructor(private router: ActivatedRoute, private db: PouchDbService, private QrScanner: QrscannerService) { }

  ngOnInit() {
    console.log(this.router.url.subscribe(data => {
      console.log(data[1]);
      this.millerId = +data[1].path;
      console.log('miller id ', this.millerId);
    }));

    this.db.fetch().then(data => {
      console.log('data ', data);
      data.rows.forEach(dataDoc => {
        console.log(dataDoc.doc);
        if (dataDoc.doc.type === Type.millerRequest && dataDoc.doc._id === '' + this.millerId) {
          this.doc = dataDoc.doc;
          console.log('doc', this.doc);

          const primeString = this.QrScanner.config['gate-key'] * this.QrScanner.config['private-key'];
          this.doc.primeString = primeString;
          this.datacode = JSON.stringify(this.doc);
          console.log('datacode:', this.datacode);
        }
      });
    }).catch(err => {
      console.log(err);
    });




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
