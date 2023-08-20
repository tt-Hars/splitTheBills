import { Component, OnInit, ViewChild } from "@angular/core";
import { FormComponent } from "../../shared/components/form/form.component";
import { CalculateShare } from "../../shared/logic/calculate-share";
import { TransactionDetail } from "../../shared/models/data.model";
import { ResultComponent } from "../../shared/components/result/result.component";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: [],
})
export class HelloComponent implements OnInit {
  csInstance: CalculateShare;
  isChecked: boolean;
  isResultAvailable: boolean;

  ngOnInit(): void {
    this.csInstance = new CalculateShare();
    this.isChecked = false;
  }

  @ViewChild("formRef") formComponent: FormComponent;
  @ViewChild("resultRef") resultComponent: ResultComponent;

  formSubmit(e: Event) {
    this.formComponent.onSubmit();
    const formValue: TransactionDetail = {
      ...this.formComponent.memberForm.value,
    };
    const eventSplits = this.csInstance.calculateEventShare(formValue);
    this.isResultAvailable = true;
    setTimeout(() => this.resultComponent.showResult(eventSplits), 0)
    console.log(eventSplits);
  }

  formReset(e: Event) {
    this.formComponent.onReset();
  }

  addEvent(e: Event) {
    this.formComponent.addEvent();
  }
}
