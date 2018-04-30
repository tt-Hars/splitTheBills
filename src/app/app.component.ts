import { Component, OnInit, OnChanges } from '@angular/core';
import { AddUserEventsComponent } from './add-user-events/add-user-events.component';
import { DataServiceService } from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private _ds: DataServiceService){}
  title = 'Split your bills';
  currentUser = 'There';
  imgPath= './app/images/dummy-ser.png';
  isEleVisible = true;
  isEleHidden = true;
  getUserName(userName: string): void {
    if (userName !== null) {
    this.currentUser = userName;
    this.isEleHidden = true;
    }
  }
  ngOnInit() {
    this._ds.currentName.subscribe(message => this.currentUser = message)
  }
}
