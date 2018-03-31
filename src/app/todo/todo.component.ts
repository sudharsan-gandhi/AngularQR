import { Component, OnInit } from '@angular/core';
import { QrscannerService } from '../services/qrscanner.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public QrScanner: QrscannerService) { }
  ngOnInit() {
  }

}
