import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Observable, Subscription, fromEvent } from "rxjs";
import { v4 as uuid } from "uuid";
import { SharedModule } from "../../shared.module";

import getAName from "../../random-names";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./form.component.html",
  styles: [],
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("formElement") formElement: ElementRef;
  memberForm: FormGroup;
  eventCount = 0;
  memberCount = 0;
  currencies = [];
  click$: Observable<unknown>;
  clickSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.memberForm = this.formBuilder.group({
      transactionId: uuid(),
      events: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.currencies = [
      {
        symbol: "₹",
        code: "INR",
      },
      {
        symbol: "€",
        code: "EUR",
      },
      {
        symbol: "$",
        code: "USD",
      },
      {
        symbol: "£",
        code: "GBP",
      },
      {
        symbol: "¥",
        code: "JPY",
      },
    ];
    // need at least an event and 2 members to split the bill
    this.addEvent();
  }

  // should be moved to a directive
  ngAfterViewInit(): void {
    this.click$ = fromEvent(this.formElement.nativeElement, "click");
    this.clickSubscription = this.click$.subscribe((evt: MouseEvent) => {
      const clickedItem = evt.target as HTMLInputElement;
      if (clickedItem.nodeName === "INPUT") {
        clickedItem.select();
        console.log("I am clicked", evt.target);
      }
    });
  }

  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
  }

  members(eventIndex = 0): FormArray {
    return this.events().controls[eventIndex].get("members") as FormArray;
  }

  events(): FormArray {
    return this.memberForm.get("events") as FormArray;
  }

  newEvent(): FormGroup {
    return this.formBuilder.group({
      eventId: uuid(),
      eventName: `${getAName()}'s event`,
      members: this.formBuilder.array([]),
    });
  }

  newMember(): FormGroup {    
    return this.formBuilder.group({
      memberId: uuid(),
      memberName: getAName(),
      amount: 0,
      actualContribution: 0,
      currency: "INR",
    });
  }

  addMember(eventIndex = 0, e?: Event) {
    this.memberCount++;
    e?.preventDefault();
    this.members(eventIndex).push(this.newMember());
  }

  addEvent(e?: Event) {
    e?.preventDefault();
    this.events().push(this.newEvent());
    this.addMember(this.events().length - 1);
    this.addMember(this.events().length - 1);
    this.addMember(this.events().length - 1);
    this.eventCount++;
  }

  removeMember(e: Event, index: number, eventIndex: number) {
    e?.preventDefault();
    this.members(eventIndex).removeAt(index);
  }

  removeEvent(e: Event, index: number) {
    e?.preventDefault();
    this.events().removeAt(index);
  }

  onSubmit() {
    console.log(this.memberForm.value);
  }

  onReset() {
    this.memberForm.reset();
    // remove all the items from list
    
    // for(let i = this.events.length; this.events.length > 1 ; i++) {
    //   this.removeEvent(null, 0)
    //   this.removeMember(null, i, 0)
    // }
  }
}
