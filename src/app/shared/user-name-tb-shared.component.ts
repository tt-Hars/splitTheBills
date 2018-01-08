import { Component, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-name-tb-shared',
  templateUrl: './user-name-tb-shared.component.html',
  styleUrls: ['./user-name-tb-shared.component.less']
})
export class UserNameTbSharedComponent implements OnChanges {

  nameTextPlaceholder = 'What is your name?';
  @Output() getUsersName: EventEmitter<string> = new EventEmitter<string>();
  keyPressEnter(nameValue: string): void {
    this.getUsersName.emit(`${nameValue}`);
  }
  constructor() { }

  ngOnChanges() {
  }

}
