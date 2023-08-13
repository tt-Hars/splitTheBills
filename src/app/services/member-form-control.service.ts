import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MemberFormModel } from "../shared/models/member.form.model";

@Injectable({
  providedIn: "root",
})
export class MemberFormControlService {
  toFormGroup(memberForm: MemberFormModel<string>[]) {
    const group: any = {};

    memberForm.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || "", Validators.required)
        : new FormControl(question.value || "");
    });
    return new FormGroup(group);
  }
  constructor() {}
}
