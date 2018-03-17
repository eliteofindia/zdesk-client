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

  public closeProgress(){
    this.showProgress = false;
  }

  public getProgressStatus(){
    return this.showProgress;
  }
}
