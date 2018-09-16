import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";
import { EventDetails } from '../ifsc';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.less']
})
export class ResultViewComponent implements OnInit {
 
  constructor(private _ds: DataServiceService, private _httpc: HttpClient) { }
  public passedEventDetails: EventDetails[];

  //data = this._httpc.get('./app/images/dummy.json').subscribe(d =>this.passedEventDetails = d);

  public getEventDetails(){
    this._httpc.get('./app/images/dummy.json')
    .subscribe((data) => {
      this.passedEventDetails = <any>data 
      console.log(this.passedEventDetails)
    });
 // this._ds.eventDetails.subscribe((data) => { console.log(data); this.passedEventDetails = data });
    //console.log(this.data);
    setTimeout(() => {console.log('fromResult' + this.passedEventDetails);},400)
    console.log('fromResult' + this.passedEventDetails);
  }

  ngOnInit() {
    this.getEventDetails();
  }

}
