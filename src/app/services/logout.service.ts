import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PouchDbService } from './pouch-db.service';

@Injectable()
export class LogoutService {

  constructor( private route: Router, private db: PouchDbService) {
    window.addEventListener('load', () => {
      this.validateSession();
    });
   }

  // invalidates session by removing token and user details from sessionStorage.
  public logout() {
    sessionStorage.clear();
    this.route.navigateByUrl('/login');
  }

  public validateSession() {
    if (sessionStorage.length > 0) {
      const check = this.db.validate();
      if (!check) {
        this.route.navigateByUrl('/login');
      } else {
        console.log('continuing session successfully');
      }
    } else {
    this.route.navigateByUrl('/login');
    }
  }
}
