import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from '../movie-list/movie-list.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [MovieListComponent]
})
export class MovieModule { }
