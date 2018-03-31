import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProgressBarService {

  isLoading = false;
  loadingChange: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  show() {
    this.isLoading = true;
    this.loadingChange.next(this.isLoading);
  }

  hide() {
    this.isLoading = false;
    this.loadingChange.next(this.isLoading);
  }

}
