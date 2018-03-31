import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  private isLoading: boolean;
  constructor(private progressBar: ProgressBarService) {
    this.isLoading = progressBar.isLoading;
    progressBar.loadingChange.subscribe((value) => {
      this.isLoading = value;
    });
   }

  ngOnInit() {
  }

}
