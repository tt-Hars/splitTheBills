import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetails } from './ifsc';
import { EventDetails } from './ifsc';
import { RegisteredUserDetails } from './ifsc';

@Injectable()
export class DataServiceService {

  private _userName = new BehaviorSubject('There!');
  private _users = new BehaviorSubject([]);
  private _events = new BehaviorSubject([]);
  private _regUsers = new BehaviorSubject([]);
  currentName = this._userName.asObservable();
  currentUsersList = this._users.asObservable();
  currentEventsList = this._events.asObservable();
  constructor() { }

  setUserName(uName: string) {
    this._userName.next(uName);
  }

  setUsersList(userList: any[]) {
    this._users.next(userList);
  }
  setEventsList(eventList: any[]) {
    this._events.next(eventList);
  }
  setRegUsersList(regUsersList: any[]) {
    this._regUsers.next(regUsersList);
  }

}
