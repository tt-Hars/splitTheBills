import { Component, OnInit, OnChanges, Output,
  EventEmitter, Input, Directive, ElementRef, Inject, Renderer2, Renderer} from '@angular/core';
import { fail } from 'assert';
import {UserDetails} from '../ifsc';

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
  userValue = '';
  userCounter = 0;

  addUserclicked() {
    this.isAddUsersFormEleHidden = false;
    this.isAddUsersFormEleVisible = true;
    this.isFormHeadingEleHidden = true;
    const element = this._renderer.selectRootElement('.userInfo');
    setTimeout(() => element.focus(), 0);
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

  constructor(private _renderer: Renderer2) { }

  ngOnChanges() {

  }

  ngOnInit() {

  }
}
