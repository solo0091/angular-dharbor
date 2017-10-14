import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MATERIAL_COMPATIBILITY_MODE,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule, //se aumenta la referencia a la lista
  MatToolbarModule
  
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,//se aumenta la referencia a la lista
    MatToolbarModule
    
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,//se aumenta la referencia a la lista
    MatToolbarModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  declarations: []
})
export class MaterialModule { }