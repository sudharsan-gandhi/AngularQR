import { Type } from './../../shared/enums/type.enum';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { PouchDbService } from '../../services/pouch-db.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent implements OnInit {

  type: string;
  docs: any[] = new Array();
  constructor(private db: PouchDbService) { }

  ngOnInit() {
    this.type = 'all';
    // this.db.deleteAll();
    this.fetch(this.type);
  }

  onRequestTypeChange(type: string) {
    console.log('type' + type);
    this.type = type;
    this.docs = new Array();
    this.fetch(this.type);
  }

  fetch(type: string) {
    this.db.fetch().then(data => {
      console.log('docs ', data);
      data.rows.forEach(datum => {
        console.log('element ', datum.doc);
        if ((datum.doc.status === type || type === 'all') && (datum.doc.type === Type.millerRequest)) {
          this.docs.push(datum.doc);
        }
      });
      console.log('docs pushed', this.docs);
    }).catch(err => {
      console.log('error ', err);
    });
    console.log('docs ', this.docs);
  }

}
