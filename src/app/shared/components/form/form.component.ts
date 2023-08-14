import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { SharedModule } from "../../shared.module";

import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { MemberFormModel } from "../../models/member.form.model";
import { v4 as uuid } from "uuid";
import getAName from "../../random-names";
import { Observable, Subscription, fromEvent } from "rxjs";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./form.component.html",
  styles: [],
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('formElement') formElement: ElementRef
  memberForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.memberForm = this.formBuilder.group({
      eventId: uuid(),
      eventName: `${getAName()}'s event`,
      members: this.formBuilder.array([]),
    });
  }

  memberCount = 0;
  currencies = [];
  click$: Observable<unknown>;
  clickSubscription: Subscription;

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
    // need at least 2 members to split the bill
    this.addMember();
    this.addMember();
  }

  // should be moved to a directive
  ngAfterViewInit(): void {
    this.click$ = fromEvent(this.formElement.nativeElement, 'click')
    this.clickSubscription = this.click$.subscribe((evt: MouseEvent) => {
      const clickedItem = (evt.target as HTMLInputElement)
      if(clickedItem.nodeName === 'INPUT'){
        clickedItem.select()
        console.log('I am clicked', evt.target)
      }
    })
  }

  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe()
  }

  members(): FormArray {
    return this.memberForm.get("members") as FormArray;
  }

  newMember(): FormGroup {
    return this.formBuilder.group({
      memberId: uuid(),
      memberName: getAName(),
      amount: 0,
      currency: "USD",
    });
  }

  addMember(e?: Event) {
    this.memberCount++;
    e?.preventDefault();
    this.members().push(this.newMember());
  }

  removeMember(e: Event, index: number) {
    e.preventDefault();
    this.members().removeAt(index);
  }

  onSubmit() {
    console.log(this.memberForm.value);
  }

  onReset() {
    debugger;
    this.memberForm.reset();
  }
}
