import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { ISubscription } from 'rxjs/Subscription';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.less']
})
export class LoginViewComponent implements OnInit, OnDestroy {

  userNameWarningMsg = 'Please provide username';
  userPwdWarningMsg = 'Please provide password';
  Uname;
  Upass;
  rCnfPassword = '';
  rPassword = '';
  rUserName = '';
  rName = '';
  rPwdGoodEnough = 'Good enough';
  rPwdMatched = '';
  rPwdDMatch = '';
  private _subs: ISubscription;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _ds: DataServiceService) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((param: Params) => {
      const fromPage = param['from'];
      if (fromPage === 'login') {
        document.getElementById('loginContainer').classList.remove('hideItem');
        document.getElementById('registerContainer').className += ' hideItem ';
      }else if (fromPage === 'register') {
        document.getElementById('registerContainer').classList.remove('hideItem');
        document.getElementById('loginContainer').className += ' hideItem ';
      }
    });
  }

  ngOnDestroy() {
    // this._subs.unsubscribe();
  }
  validateLogin(id, pass) {
    if (!(document.getElementById('lgnFrmSbmtBtn').classList.contains('disabled'))) {
      this._router.navigate(['./dashboardView']);
    }
  }
  registerUser() {
    this._router.navigate(['./dashboardView']);
  }

  matchPasswords(pwd, cpwd) {
    const cngPwdIpt = document.getElementById('cnfPassword');
    // if (!cngPwdIpt.classList.contains('ng-untouched')) {
      if (this.rCnfPassword === this.rPassword) {
        cngPwdIpt.classList.remove('invalid');
        cngPwdIpt.className += ' valid ';
        this.rPwdDMatch = '';
        this.rPwdMatched = 'Passwords matched';
        this._ds.setUserName(this.rName);
      } else {
        cngPwdIpt.classList.remove('valid');
        cngPwdIpt.className += ' invalid ';
        this.rPwdMatched = '';
        this.rPwdDMatch = 'Passwords didn\'t match';
      }
    // }
  }


}
