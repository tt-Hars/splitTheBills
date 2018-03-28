import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.less']
})
export class MenuViewComponent implements OnInit {

  constructor(private _renderer: Renderer2) { }

  focusIp() {
    const element = this._renderer.selectRootElement('#addUsers');
    element.focus();
   // setTimeout(() => element.focus(), 0);
  }

  ngOnInit() {
  }

}
