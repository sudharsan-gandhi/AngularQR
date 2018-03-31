import { Type } from './../../shared/enums/type.enum';
import { Component, OnInit } from '@angular/core';
import { PouchDbService } from '../../services/pouch-db.service';
import { Status } from '../../shared/enums/status.enum';


@Component({
  selector: 'app-miller-requests',
  templateUrl: './miller-requests.component.html',
  styleUrls: ['./miller-requests.component.scss']
})
export class MillerRequestsComponent implements OnInit {

  docs: any[] = new Array();
  shed: any;
  shedPercentage = 0;
  success: string;
  constructor(private db: PouchDbService) { }

  ngOnInit() {
    // this.db.deleteAll();
    this.success = sessionStorage.getItem('success');
    setTimeout(() => {
      this.success = 'false';
    }, 1500);
    this.db.fetch().then(data => {
      data.rows.forEach(element => {
        console.log('element ', element.doc);
        // tslint:disable-next-line:max-line-length
        if ((element.doc.status === Status.submitted || element.doc.status === Status.accepted || element.doc.status === Status.rejected) && (element.doc.type === Type.millerRequest)) {
          this.docs.push(element.doc);
          console.log('docs', this.docs);
        } else if (element.doc.type === Type.shed) {
          this.shed = element.doc;
          console.log('shed', this.shed);
          this.shedPercentage = ((this.shed.allotedSheds) / this.shed.numberOfSheds) * 100;
          console.log('shed Percentage', this.shedPercentage.toFixed(0));
        }
      });
    }).catch(err => {
      console.log('error', err);
    });
  }

  accept(doc: any) {
    doc.status = Status.accepted;
    console.log('accept ', doc);
    if (this.shed !== undefined && this.shed !== null) {

      const tonsPerShed = +this.shed.tonsPerShed;
      const totalNumberOfSheds = +this.shed.numberOfSheds;
      const allotedSheds = +this.shed.allotedSheds;
      const allotedTons = +this.shed.allotedTons;
      const tonnesToBeUsed = Number((((doc.total_weight)) / (totalNumberOfSheds * tonsPerShed)) * 100).toFixed(2);
      const remainingTons = Number((totalNumberOfSheds * tonsPerShed) - ((Number(this.shed.allotedSheds) * tonsPerShed * 100 ) / 100));
      if (this.shed.allotedSheds !== 0) {
        this.shedPercentage = Number(this.shed.allotedSheds);
      }
      if (remainingTons - doc.total_weight > 0) {
        this.shedPercentage = +(Number(this.shed.allotedSheds) + Number(tonnesToBeUsed));
        this.shed.allotedSheds = +this.shedPercentage;
        // Update miller object
        doc.allotedShed = this.shed.allotedSheds;

        console.log('alloted shed for miller ', doc);

        // Update DB
        this.db.put(doc._id, doc);
        this.db.put(this.shed._id, this.shed);
      }
    }
  }

  decline(doc: any) {
    doc.status = Status.rejected;
    console.log('rejected ', doc);
    if (this.shed !== undefined && this.shed !== null) {

      const tonsPerShed = +this.shed.tonsPerShed;
      const totalNumberOfSheds = +this.shed.numberOfSheds;
      const allotedSheds = +this.shed.allotedSheds;
      const allotedTons = +this.shed.allotedTons;
      const tonnesToBeUsed = Number((((doc.total_weight)) / (totalNumberOfSheds * tonsPerShed)) * 100).toFixed(2);
      const remainingTons = Number((totalNumberOfSheds * tonsPerShed) - ((Number(this.shed.allotedSheds) * tonsPerShed * 100 ) / 100));
      if (this.shed.allotedSheds !== 0) {
        this.shedPercentage = Number(this.shed.allotedSheds);
      }
        this.shedPercentage = +(Number(this.shed.allotedSheds) - Number(tonnesToBeUsed));
        this.shed.allotedSheds = +this.shedPercentage;
        // Update miller object
        doc.allotedShed = this.shed.allotedSheds;

        console.log('alloted shed for miller ', doc);

        // Update DB
        this.db.put(doc._id, doc);
        this.db.put(this.shed._id, this.shed);
      }
  }

}
