import { Component, OnInit, Input } from '@angular/core';
import { UserDetails, EventDetails } from '../../ifsc';
import { AddUserEventsComponent } from '../add-user-events.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {

   userDetails: UserDetails[] = [];
   @Input() userDetailList: UserDetails[] = [];
   @Input() fromWhere: string;

  listUsers() {
    this.userDetails = this.userDetailList;
  }

  constructor() { }

  ngOnInit() {
     this.listUsers();
     console.log('fw' + this.fromWhere);
  }

}
