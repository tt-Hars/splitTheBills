import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserDetails, EventDetails, RegisteredUserDetails } from '../ifsc';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.less']
})
export class UserDashboardComponent implements OnInit {

  userDetails: UserDetails[] = [];
  eventDetails: EventDetails[] = [];
  regUserDetails: RegisteredUserDetails[] = [];
  constructor(private _ds: DataServiceService) { }

  ngOnInit() {
    this._ds.currentUsersList.subscribe(message => {
      this.userDetails = message;
      console.log(this.userDetails);
    });
    this._ds.currentEventsList.subscribe(message => this.eventDetails = message);
    this._ds.regUserDetails.subscribe(data => {
      this.regUserDetails = data;
      console.log('inside' + this.regUserDetails);
      console.log(this.regUserDetails);
    });
    console.log('outside' + this.regUserDetails);
    console.log(this.regUserDetails);
  }

}
