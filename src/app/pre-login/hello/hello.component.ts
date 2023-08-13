import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormComponent} from '../../shared/components/form/form.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: []
})
export class HelloComponent {
  @ViewChild('formRef') form: FormComponent

  formSubmit(e: Event){
    console.log(this.form)
    this.form.onSubmit()
  }

  formReset(e: Event){
    this.form.onReset()
  }
}
