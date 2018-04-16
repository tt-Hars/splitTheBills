import { Component, OnInit, OnChanges, Output,
  EventEmitter, Input, Directive, ElementRef, Inject, Renderer2, Renderer} from '@angular/core';
import { fail } from 'assert';
import {UserDetails} from '../ifsc';

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

   let elem = document.querySelector('.modal');
   console.log(elem);
   let options;
   let instance = M.Modal.init(elem, options);
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
    this.userDetails.push({or_id: this.userCounter, name: val, new_id: this.userCounter} );
    this.userValue = '';
    this.userCounter++;
    this.refreshArrayIds();
    const element = this._renderer.selectRootElement('.userInfo');
    element.value = '';
    setTimeout(() => element.focus(), 0);
  }

  clearFields(){

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
