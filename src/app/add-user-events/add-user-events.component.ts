import { Component, OnInit, OnChanges, Output,
  EventEmitter, Input, Directive, ElementRef, Inject, Renderer2, Renderer} from '@angular/core';
import { fail } from 'assert';
import {UserDetails, EventDetails} from '../ifsc';

declare var M;
@Component({
  selector: 'app-add-user-events',
  templateUrl: './add-user-events.component.html',
  styleUrls: ['./add-user-events.component.less']
})
export class AddUserEventsComponent implements OnChanges, OnInit {
  isAddUsersFormEleVisible = false;
  isAddUsersFormEleHidden = true;
  isFormHeadingEleHidden = false;
  userDetails: UserDetails[] = [];
  userDetailsList: UserDetails[] = [];
  userValue = '';
  userCounter = 0;
  isAddEventsFormEleVisible = false;
  isAddEventsFormEleHidden = true;
  isFromEvents = true;
  eventDetails: EventDetails[] = [];
  eventDetailsList: EventDetails[] = [];
  userAddWarningMsg = '';
  isUserListHidden =true;
  userListShowHideText = 'Show all';
  addUserclicked() {
    this.isAddUsersFormEleHidden = false;
    this.isAddUsersFormEleVisible = true;
    this.isFormHeadingEleHidden = true;
    const element = this._renderer.selectRootElement('.userInfo');
    setTimeout(() => element.focus(), 0);
  }

  showEventsBox() {
   this.isAddUsersFormEleVisible = true;
   this.isAddUsersFormEleHidden = false;
   this.isAddEventsFormEleVisible = true;
   this.isAddEventsFormEleHidden = false;
   this.isFromEvents = true;

   const elem = document.querySelector('.modal');
   console.log(elem);
   const options = {};
   const instance = M.Modal.init(elem, options);
   instance.open();
  }

  delUserFromUserDetails(val) {
    this.userDetails.splice(val, 1);
    this.refreshArrayIds();
  }

  refreshArrayIds() {
    this.userDetails.forEach((item, index, array) => {
      this.userDetails[index].new_id = index;
    });
  }

  addUserToUserDetails(val) {
    const element = this._renderer.selectRootElement('.userInfo');
    if (document.getElementById('addUserIpt').className.indexOf('invalid') < 0) {
      this.userDetails.push({or_id: this.userCounter, name: val, new_id: this.userCounter} );
      this.userValue = '';
      this.userCounter++;
      this.refreshArrayIds();
      this.listUsers();
    } else {
      this.userAddWarningMsg = 'Please provide input';
    }
      element.value = '';
      setTimeout(() => element.focus(), 0);
  }

  addEventToEventDetails() {
    
  }

  clearFields() {

  }

  openCal() {
    const elem = document.querySelector('.datepicker');
    const options = {};
    const instance = M.Datepicker.init(elem, options);
    instance.open();
  }

  showUsersInEvent(){
    this.isUserListHidden = this.isUserListHidden ? false : true;
    this.userListShowHideText = this.isUserListHidden ? 'Show all ' : 'Hide '
  }

  listUsers() {
    this.userDetailsList = this.userDetails;
  }
  constructor(private _renderer: Renderer2) { }

  ngOnChanges() {

  }

  ngOnInit() {

  }
}
