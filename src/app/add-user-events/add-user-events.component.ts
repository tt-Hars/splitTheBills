import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-add-user-events',
  templateUrl: './add-user-events.component.html',
  styleUrls: ['./add-user-events.component.less']
})
export class AddUserEventsComponent implements OnChanges {
  @Input() nameTextPlaceholder = 'What is your name?';
  @Output() getUsersName: EventEmitter<string> = new EventEmitter<string>();
  temp: string;
  userName: string;
  keyPressEnter(nameValue: string): void {
    this.getUsersName.emit(`${this.nameTextPlaceholder}`);
    this.temp = nameValue;
  }
  constructor() { }

  ngOnChanges() {
  }


}
