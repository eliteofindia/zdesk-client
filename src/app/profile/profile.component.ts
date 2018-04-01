import { Component, OnInit } from '@angular/core';
import { DeskService } from './service/desk.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private desk: DeskService) { }

  ngOnInit() {
    this.desk.getServices().subscribe(
      (data)=>{
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
