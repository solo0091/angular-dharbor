import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MaterialModule } from '../material/material.module';
import { MoviesService } from '../shared/services/movies.service';


@NgModule({
  imports: [
    CommonModule,MaterialModule
  ],
  declarations: [MovieListComponent],
  providers: [MoviesService]
})
export class MovieModule { }
