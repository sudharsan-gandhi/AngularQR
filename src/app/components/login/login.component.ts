import { ProgressBarService } from './../../shared/progress-bar.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user.interface';
import { PouchDbService } from '../../services/pouch-db.service';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: String;
  constructor(private reg_form: FormBuilder,
    private db: PouchDbService, private progressBar: ProgressBarService, private zone: NgZone, private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(user) {
    console.log(user);
    this.progressBar.show();
    this.db.login(user).subscribe((data) => {
      this.progressBar.hide();
      const body = data.json();
      console.log('body', body);
      if (body.token !== undefined || body.token !== '' || body.token !== null) {
        sessionStorage.setItem('token', body.token);
        sessionStorage.setItem('userId', body.data._id);
        console.log('locastorage-user ', sessionStorage.getItem('userId').toString());
      }
      this.route.navigateByUrl(body.path);


    }, (error) => {
      this.progressBar.hide();
      const body = JSON.parse(error._body);
      this.errorMessage = body.error_msg;
      this.route.navigateByUrl(body.path);
    }
    );
  }
}
