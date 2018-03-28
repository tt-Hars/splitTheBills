import { Component, OnChanges, Output, EventEmitter, Renderer2, Directive } from '@angular/core';

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
    // const element = this._renderer.selectRootElement('#addUsers');
    // element.focus();
   // setTimeout(() => element.focus(), 0);
  }
  constructor(private _renderer: Renderer2) { }

  ngOnChanges() {
  }

}
