import { NgModule } from '@angular/core';
import { MaterialImportsModule } from './material-imports.module/material-imports.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialImportsModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class SharedModule { }
