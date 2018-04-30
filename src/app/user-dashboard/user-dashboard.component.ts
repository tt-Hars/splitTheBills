import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserDetails, EventDetails } from '../ifsc';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.less']
})
export class UserDashboardComponent implements OnInit {

  userDetails: UserDetails[] = [];
  eventDetails: EventDetails[] = [];
  constructor(private _ds: DataServiceService) { }

  ngOnInit() {
    this._ds.currentUsersList.subscribe(message => {this.userDetails = message; console.log(this.userDetails); });
    this._ds.currentEventsList.subscribe(message => this.eventDetails = message);
    console.log(this.eventDetails,  this.userDetails);
  }

}
