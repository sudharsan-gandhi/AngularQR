import { Type } from './../../shared/enums/type.enum';
// import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { PouchDbService } from '../../services/pouch-db.service';


@Component({
  selector: 'app-gate-entry',
  templateUrl: './gate-entry.component.html',
  styleUrls: ['./gate-entry.component.scss']
})
export class GateEntryComponent implements OnInit {

  type: string;
  docs: any[] = new Array();
  constructor(private db: PouchDbService) { }


  ngOnInit() {
    this.fetch('all');
  }
  active(doc: any) {
    doc.status = 'active';
    console.log('active ', doc);
    this.db.put(doc._id, doc);
  }
  complete(doc: any) {
    doc.status = 'complete';
    console.log('complete ', doc);
    this.db.put(doc._id, doc);
  }

  onRequestTypeChange(type: string) {
    console.log(' type ' + type);
    this.type = type;
    this.docs = new Array();
    this.fetch(this.type);
  }
  fetch(type: string) {
    this.db.fetch().then(data => {
      console.log('docs ', data);
      data.rows.forEach(doc => {
        console.log('element ', doc.doc);
        if ((doc.doc.status === type) || (type === 'all' && doc.doc.status !== 'submitted') && (doc.doc.type === Type.millerRequest)) {
          this.docs.push(doc.doc);
        }
      });
      console.log('docs pushed', this.docs);
    }).catch(err => {
      console.log('error ', err);
    });
    console.log('docs ', this.docs);
  }

}
