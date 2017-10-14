import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MaterialModule } from '../material/material.module';  //import
@NgModule({
  imports: [
    CommonModule, 
    MaterialModule  //poner este
  ],
  declarations: [MovieListComponent]
})
export class MovieModule { }
