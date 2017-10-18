import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../shared/services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [MovieListComponent],
  providers: [MovieService]
})
export class MovieModule { }
