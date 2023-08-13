import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './material-imports.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  exports: [
    MaterialImportsModule
  ]
})
export class SharedModule { }
