import { PouchDbService } from './../../services/pouch-db.service';
import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private db: PouchDbService, private logout: LogoutService) { }

  ngOnInit() {
    this.db.sync();
  }

  public signout() {
    this.logout.logout();
  }
}
