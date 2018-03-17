import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public collapseMenu(){
    let menuIcon = document.getElementsByClassName("show");
    if(menuIcon.length>0){
      document.getElementById("toggle").click();
    }
  }
}
