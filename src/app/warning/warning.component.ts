import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  public title: string;
  public warningMsg: string;
  public showModal: boolean;

  constructor() { }

  ngOnInit() {
    this.title = 'Sample Title';
    this.warningMsg = 'sample warning message';
    this.showModal = false;
  }

  dismiss() {
    this.showModal = false;
  }

  openDangerModal(title: string, warningMsg: string) {
    this.title = title;
    this.warningMsg = warningMsg;
    this.showModal = true;
  }
}
