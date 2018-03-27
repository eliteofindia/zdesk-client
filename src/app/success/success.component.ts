import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public title:string;
  public successMsg:string;
  public showModal: boolean;
  constructor() { }
  ngOnInit() {
    this.title = "Sample Title";
    this.successMsg = "sample error message";
    this.showModal = false;
  }

  dismiss(){
    this.showModal = false;
  }

  openDangerModal(title:string, errorMsg:string){
    this.title = title;
    this.successMsg = errorMsg;
    this.showModal = true;
  }
}
