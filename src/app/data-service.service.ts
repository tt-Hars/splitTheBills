import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import {EventDetails} from './ifsc'

@Injectable()
export class DataServiceService {
  // public eventDetails;
  private _userName = new BehaviorSubject("There!");
  private _eventDetails = new BehaviorSubject([]);
  currentName = this._userName.asObservable();
  eventDetails = this._eventDetails.asObservable();
  constructor() { }

  setUserName(uName: string) {
    this._userName.next(uName);
  }

  passEventDetails(evtD: EventDetails[]) {
    this._eventDetails.next(evtD);
  }

}
