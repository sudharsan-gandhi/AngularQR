import { Component, OnInit } from '@angular/core';
import { PouchDbService } from '../../services/pouch-db.service';
import { LogoutService } from '../../services/logout.service';
@Component({
  selector: 'app-operator-dashboard',
  templateUrl: './operator-dashboard.component.html',
  styleUrls: ['./operator-dashboard.component.scss']
})
export class OperatorDashboardComponent implements OnInit {

  constructor(private logout: LogoutService, private db: PouchDbService) { }

  ngOnInit() {
    this.db.sync();
  }
  
  public signout(){
    this.logout.logout();
  }

}
