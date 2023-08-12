import { Component, OnInit, OnChanges, Output, EventEmitter, Input, Directive, ElementRef, Inject, Renderer2 } from '@angular/core';
import { UserDetails, EventDetails } from '../ifsc';
import { Subscription } from 'rxjs';
import { DataServiceService } from "../data-service.service";
import { Router } from '@angular/router';

declare var M;
@Component({
  selector: 'app-add-user-events',
  templateUrl: './add-user-events.component.html',
  styleUrls: ['./add-user-events.component.less']
})
export class AddUserEventsComponent implements OnChanges, OnInit {
  isAddUsersFormEleVisible = false;
  isAddUsersFormEleHidden = true;
  isFormHeadingEleHidden = false;
  userDetails: UserDetails[] = [];
  userDetailsList: UserDetails[] = [];
  filteredUsersList: UserDetails[] =[];
  userValue = '';
  userCounter = 0;
  eventCounter = 0;
  isAddEventsFormEleVisible = false;
  isAddEventsFormEleHidden = true;
  isFromEvents = true;
  eventDetails: EventDetails[] = [];
  eventDetailsList: EventDetails[] = [];
  userAddWarningMsg = '';
  amtDescrepancyMsg = '';
  addProceedCnfrmtnMsg = '';
  isUserListHidden = true;
  userListShowHideText = 'Show all';
  addUserclicked() {
    this.isAddUsersFormEleHidden = false;
    this.isAddUsersFormEleVisible = true;
    this.isFormHeadingEleHidden = true;
    const element = this._renderer.selectRootElement('.userInfo');
    setTimeout(() => element.focus(), 0);
  }

  showEventsBox() {
    this.isAddUsersFormEleVisible = true;
    this.isAddUsersFormEleHidden = false;
    this.isAddEventsFormEleVisible = true;
    this.isAddEventsFormEleHidden = false;
    this.isFromEvents = true;

    const elem = document.querySelector('#addEvent');
    const instance = M.Modal.init(elem, {});
    instance.open();
  }

  public openModifyuserDialog() : void {
    const elem = document.querySelector('#modifyUsersContainer');
    const instance = M.Modal.init(elem, {});
    instance.open();
  }

  public closeModifyUsersDialog(operation) {
    if(operation === 'update'){
      console.log('update');
    }
    const elem = document.querySelector('#modifyUsersContainer');
    const instance = M.Modal.init(elem, {});
    instance.close();
  }

  delUserFromUserDetails(val) {
    this.userDetails.splice(val, 1);
    this.refreshArrayIds();
  }

  refreshArrayIds() {
    this.userDetails.forEach((item, index, array) => {
      this.userDetails[index].new_id = index;
    });
  }

  addUserToUserDetails(val) {
    const element = this._renderer.selectRootElement('.userInfo');
    if (document.getElementById('addUserIpt').className.indexOf('invalid') < 0) {
      this.userDetails.push({ or_id: this.userCounter, name: val, new_id: this.userCounter });
      this.userValue = '';
      this.userCounter++;
      this.refreshArrayIds();
      this.listUsers();
      this._ds.setUsersList(this.userDetails);
    } else {
      this.userAddWarningMsg = 'Please provide input';
    }
    element.value = '';
    setTimeout(() => element.focus(), 0);
  }

  addEventToEventDetails(evName, evDesc, evTotAmt, evDate) {
    let indvAmt = [];
    let indvIds = [];
    let indvActive = [];
    // let or_id = 0;
    // let new_id = 0;
    const indvAmtNodeList = Array.from(document.querySelectorAll('.indvAmntCont'));   //Array.from
    const indvActiveNodeList = Array.from(document.querySelectorAll('.indvActive'));
    const indvDetNodeList = Array.from(document.querySelectorAll('.usrDet'));
    let indvTotalAmt = [];
    
    Array.prototype.forEach.call(indvAmtNodeList, function (currentValue, currentIndex) {
      indvAmt.push({ val: currentValue.value, id: currentIndex });
    });
    Array.prototype.forEach.call(indvActiveNodeList, function (currentValue, currentIndex) {
      indvActive.push({ val: currentValue.checked, id: currentIndex });
    });
    Array.prototype.forEach.call(indvDetNodeList, function (currentValue, currentIndex) {
      const getId = currentValue.innerText.substring(0, 1);
      indvIds.push({ val: getId, id: currentIndex });
    });

    const resArray = this.createUsersListArray(indvIds, indvAmt, indvActive);
    if(resArray.length>0)
    indvTotalAmt = resArray.filter(act => act.user_actve).map(val => val.amount_cont).reduce((a,b) => a+b);
    if(evTotAmt == indvTotalAmt){
      this.eventDetails.push({or_id: this.eventCounter, new_id: this.eventCounter, event_name: evName,event_tot_amt: evTotAmt,event_desc: evDesc,event_date: evDate,users_desc: resArray});
      this.eventCounter++;
      // new_id = or_id;
      console.log(this.eventDetails);
      this.addProceedCnfrmtnMsg = "Event details are added successfully. Do you want to add another event or proceed for result?";
      let elem = document.querySelector('#addProceedCnfrmtn');
      let instance = M.Modal.init(elem,{});
      instance.open();
      this.eventDetailsList = this.eventDetails;
      M.toast({html: 'Event added.'})
    }
    else{
      M.toast({html: 'Seems some descrepancy in amounts. Please Tally'});
    }
  }

  createUsersListArray(arr1, arr2, arr3) : any{
    let result = [];
    for(let i = 0; i< arr1.length; i++){
      if(i == arr1[i].id && i == arr2[i].id && i == arr3[i].id){
        result.push({id:arr1[i].val, amount_cont:parseInt(arr2[i].val), user_actve:arr3[i].val});
      }
    }
    return result;
  }

  clearFields() {
    const indvAmtNodeList = Array.from(document.querySelectorAll('.indvAmntCont'));
    const indvActiveNodeList = Array.from(document.querySelectorAll('.indvActive'));
    const indvDetNodeList = Array.from(document.querySelectorAll('.usrDet'));

    Array.prototype.forEach.call(indvAmtNodeList, function (currentValue, currentIndex) {
      currentValue.value = 0;
    });
    Array.prototype.forEach.call(indvActiveNodeList, function (currentValue, currentIndex) {
      currentValue.checked = false;
    });
    (<HTMLInputElement>document.getElementById('eventName')).value = '';
    (<HTMLInputElement>document.getElementById('eventDesc')).value = '';
    (<HTMLInputElement>document.getElementById('totAmntCont')).value = '0';
    (<HTMLInputElement>document.getElementById('evDate')).value='';
    M.toast({html: 'Entries cleared.'});
  }

  openCal() {
    const elem = document.querySelector('.datepicker');
    const options = {};
    const instance = M.Datepicker.init(elem, options);
    instance.open();
  }

  showUsersInEvent() {
    this.filteredUsersList = this.userDetails;
    const searchBarContent = <HTMLInputElement>document.getElementById('userSearchBar');
    this.isUserListHidden = this.isUserListHidden || searchBarContent.value === "" ? false : true;
    this.userListShowHideText = this.isUserListHidden ? 'Show all ' : 'Hide '
  }

  listUsers() {
    this.userDetailsList = this.userDetails;
  }

  public searchUsersInList(serachString){
    this.isUserListHidden = false;
    if(!serachString)   this.isUserListHidden = true;
    this.filteredUsersList = this.userDetails.filter(val => val.name.includes(serachString));

  }

  public closeaddProceedCnfrmtnDialog(evtType){
    if(evtType === 'add'){
      this.clearFields();
    }

    else if(evtType === 'proceed'){
      this._ds.passEventDetails(this.eventDetails);
      this._router.navigate(['./resultView']);
    }
    const elem = document.querySelector('#addProceedCnfrmtn');
    const instance = M.Modal.init(elem,{});
    instance.close();
  }
  
  constructor(private _renderer: Renderer2, private _router: Router, private _ds: DataServiceService) { }

  ngOnChanges() {

  }

  ngOnInit() {

  }
}
