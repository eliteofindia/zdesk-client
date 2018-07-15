import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-danger',
  templateUrl: './danger.component.html',
  styleUrls: ['./danger.component.css']
})
export class DangerComponent implements OnInit {

  public title: string;
  public errorMsg: string;
  public showModal: boolean;
  constructor() {}
  ngOnInit() {
    this.title = 'Sample Title';
    this.errorMsg = 'sample error message';
    this.showModal = false;
  }

  dismiss() {
    this.showModal = false;
  }

  openDangerModal(title: string, errorMsg: string) {
    this.title = title;
    this.errorMsg = errorMsg;
    this.showModal = true;
  }


}
