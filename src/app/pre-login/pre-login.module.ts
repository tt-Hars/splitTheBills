import { NgModule } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import CardComponent from '../shared/components/card/card.component';
import { FormComponent } from '../shared/components/form/form.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "hello",
    pathMatch: "full",
  },
  {
    path: "hello",
    pathMatch: "full",
    component: HelloComponent,
  }
]

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    RouterModule.forChild(routes),
   SharedModule,
   
   FormComponent,
   CardComponent
  ]
})
export class PreLoginModule { }
