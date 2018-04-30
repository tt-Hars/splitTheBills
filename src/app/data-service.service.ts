import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataServiceService {

  private _userName = new BehaviorSubject("There!");
  currentName = this._userName.asObservable();
  constructor() { }

  setUserName(uName: string) {
    this._userName.next(uName);
  }

}
