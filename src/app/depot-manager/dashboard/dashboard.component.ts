import { Component, OnInit } from '@angular/core';
import { PouchDbService } from '../../services/pouch-db.service';
import { LogoutService } from '../../services/logout.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private logout: LogoutService, private db: PouchDbService) { }

  ngOnInit() {
    this.db.sync();
  }
  public signout() {
    this.logout.logout();
  }
}
