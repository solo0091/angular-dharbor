import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../shared/services/movie.service';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [MovieListComponent, MovieListItemComponent, MovieDetailComponent, MovieEditComponent],
  providers: [MovieService]
})
export class MovieModule { }
