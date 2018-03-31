import { Type } from './../../shared/enums/type.enum';
import { User } from './../../model/user.interface';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PouchDbService } from '../../services/pouch-db.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  public errorMessage: String;
  constructor(private db: PouchDbService, private route: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      first_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern('(?:[a-zA-z.\\s])*')]),
      last_name: new FormControl(null, [Validators.required, Validators.pattern('(?:[a-zA-z.\\s])*')]),
      middle_name: new FormControl(null, [Validators.pattern('(?:[a-zA-z.\\s])*')]),
      email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}')]),
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}')]),
    });
  }

  signup(user: User) {
    console.log('user:', user);
    user.type = Type.miller;
    console.log('user:', user);
    this.db.userSignup(user).subscribe(data => {
      const body = data.json();
      console.log('signup path', body);
      this.route.navigateByUrl(body.path);
    }, error => {
      const body = JSON.parse(error._body);
      this.errorMessage = JSON.stringify(body.error_msg);
      this.route.navigateByUrl(body.path);
    }
    );
  }


}

