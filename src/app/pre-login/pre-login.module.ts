import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  // { path: "", pathMatch: "full" },
  {
    path: "",
    pathMatch: "full",
    component: HelloComponent,
  }
]

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
   SharedModule
  ]
})
export class PreLoginModule { }
