import {Component, OnInit} from '@angular/core';
import {DeskService} from './service/desk.service';
import {ApiEndpoints} from '../common/constants/apiendpoints';
import {SessionConstants} from '../common/constants/appconstants';

class ProfileData {
  public email: string;
  public name: string;
  public picture: string;
  public given_name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileData: any;
  constructor(private desk: DeskService) {}

  ngOnInit() {
    const provider = sessionStorage.getItem(SessionConstants.Provider);
    let profileUrl: string;
    switch (provider) {
      case 'facebook':
        profileUrl = ApiEndpoints.facebookDetails;
        break;
      case 'google':
        profileUrl = ApiEndpoints.googleDetails;
        break;
    }
    this.desk.getProfileDetails(profileUrl).subscribe(
      (data) => {
        switch (provider) {
          case 'facebook':
            this.mapFacebookProfile(data);
            break;
          case 'google':
            this.mapGoogleProfile(data);
            break;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private mapFacebookProfile(data) {
    this.profileData = new ProfileData();
    this.profileData.email = data.email;
    this.profileData.picture = data.extraData.picture.data.url;
    this.profileData.name = data.firstName + " " + data.lastName;
    this.profileData.given_name = data.firstName;
  }

  private mapGoogleProfile(data) {
    this.profileData = new ProfileData();
    this.profileData.email = data.email;
    this.profileData.picture = data.picture;
    this.profileData.name = data.name;
    this.profileData.given_name = data.given_name;
  }

}
