import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from './ifsc';
import { EventDetails } from './ifsc';
import { RegisteredUserDetails } from './ifsc';
import {Observable} from 'rxjs';

@Injectable()
export class DataServiceService {

  private _userName = new BehaviorSubject('There!');
  private _users = new BehaviorSubject([]);
  private _events = new BehaviorSubject([]);
  private _regUsers = new BehaviorSubject([]);
  private _eventDetails = new BehaviorSubject([]);
  currentName = this._userName.asObservable();
  currentUsersList = this._users.asObservable();
  currentEventsList = this._events.asObservable();
  regUserDetails = this._regUsers.asObservable();
  eventDetails = this._eventDetails.asObservable();
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
  passEventDetails(evtD: EventDetails[]) {
    this._eventDetails.next(evtD);
  }
}
