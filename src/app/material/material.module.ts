import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatListModule } from '@angular/material';

import {
  MATERIAL_COMPATIBILITY_MODE,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSelectModule
  
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  declarations: []
})
export class MaterialModule { }