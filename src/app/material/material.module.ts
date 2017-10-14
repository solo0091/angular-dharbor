import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MATERIAL_COMPATIBILITY_MODE,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  declarations: []
})
export class MaterialModule { }
