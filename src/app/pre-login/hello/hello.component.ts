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
    this.isChecked = true
  }

  @ViewChild("formRef") formComponent: FormComponent;

  formSubmit(e: Event) {
    this.formComponent.onSubmit();
    debugger
    const formValue: TransactionDetail = {...this.formComponent.memberForm.value}
    this.csInstance.calculateEventShare(formValue);
  }

  formReset(e: Event) {
    this.formComponent.onReset();
  }

  addEvent(e: Event) {
    this.formComponent.addEvent();
  }
}
