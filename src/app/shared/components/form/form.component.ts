import { Component, Input, OnInit } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { MemberFormModel } from "../../models/member.form.model";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [BrowserAnimationsModule, SharedModule],
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit {
  memberForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.memberForm = this.formBuilder.group({
      eventName: "Event - 1",
      members: this.formBuilder.array([]),
    });
  }

  memberCount = 0
  currencies = []

  ngOnInit(): void {
    this.currencies = [{
      symbol: '₹',
      code: 'INR'
    },{
      symbol: '€',
      code: 'EUR'
    },{
      symbol: '$',
      code: 'USD'
    },{
      symbol: '£',
      code: 'GBP'
    },{
      symbol: '¥',
      code: 'JPY'
    }]
    // need at least 2 members to split the money
    this.addMember();
    this.addMember();
  }

  members(): FormArray {
    return this.memberForm.get("members") as FormArray;
  }

  newMember(): FormGroup {
    return this.formBuilder.group({
      memberName: `Member - ${this.memberCount}`,
      contribution: 0,
      currency: 'USD'
    });
  }

  addMember(e?: Event) {
    this.memberCount++
    e?.preventDefault()
    this.members().push(this.newMember());
  }

  removeMember(e: Event, index: number) {
    e.preventDefault()
    this.members().removeAt(index);
  }

  onSubmit() {
    console.log(this.memberForm.value);
  }

  onReset() {
    debugger
    this.memberForm.reset()
  }
}
