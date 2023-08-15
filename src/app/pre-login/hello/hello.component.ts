import { Component, OnInit, ViewChild } from "@angular/core";
import { FormComponent } from "../../shared/components/form/form.component";
import { CalculateShare } from "../../shared/logic/calculate-share";
import { TransactionDetail } from "../../shared/models/data.model";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: [],
})
export class HelloComponent implements OnInit {
  csInstance: CalculateShare;
  isChecked: boolean;

  ngOnInit(): void {
    this.csInstance = new CalculateShare();
    this.isChecked = true;
  }

  @ViewChild("formRef") formComponent: FormComponent;

  formSubmit(e: Event) {
    this.formComponent.onSubmit();
    const formValue: TransactionDetail = {
      ...this.formComponent.memberForm.value,
    };
    /*
     transactionDetail = {
      transactionId: "234b793d-49d7-409d-b73f-0ca5d3b46278",
      events: [
        {
          eventId: "c4e38c0c-c049-48d9-abf8-2d9581142c85",
          eventName: "quirky booth's event",
          members: [
            {
              memberId: "c2fe1036-77cd-4748-8feb-b9cabd0a12ae",
              memberName: "brave mcclintock",
              amount: 2300,
              actualContribution: 0,
              currency: "INR",
            },
            {
              memberId: "3f9fff1d-1c9b-43c6-b6c1-e0f069941f9f",
              memberName: "trusting villani",
              amount: 3400,
              actualContribution: 0,
              currency: "INR",
            },
            {
              memberId: "da33c3f3-94a9-4a9d-a6c3-57093cb29aab",
              memberName: "vigilant heisenberg",
              amount: 9500,
              actualContribution: 0,
              currency: "INR",
            },
            {
              memberId: "42ced7f3-d481-432a-ba3b-ea396652cd10",
              memberName: "practical archimedes",
              amount: 8230,
              actualContribution: 0,
              currency: "INR",
            },
          ],
        },
        {
          eventId: "4ad49d8d-576a-409e-a4cf-8cf369d746cb",
          eventName: "wonderful austin's event",
          members: [
            {
              memberId: "0da14b3d-29af-4c69-9f0a-c437750fe496",
              memberName: "Brave Mcclintock",
              amount: 350,
              actualContribution: 0,
              currency: "INR",
            },
            {
              memberId: "34e206a3-6a34-4a94-b197-49f81f2532c9",
              memberName: "Trusting Villani",
              amount: 0,
              actualContribution: 0,
              currency: "INR",
            },
            {
              memberId: "73de2f83-5f61-4530-b3ac-f7c3341fa7f4",
              memberName: "Practical Archimedes",
              amount: 89,
              actualContribution: 0,
              currency: "INR",
            },
          ],
        },
      ],
    }; 
    */
    const eventSplits = this.csInstance.calculateEventShare(formValue);
    console.log(eventSplits);
  }

  formReset(e: Event) {
    this.formComponent.onReset();
  }

  addEvent(e: Event) {
    this.formComponent.addEvent();
  }
}
