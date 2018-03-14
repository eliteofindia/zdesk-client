import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  private showProgress: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  private closeProgress(){
    this.showProgress = false;
  }
}
