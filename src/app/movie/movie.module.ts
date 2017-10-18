import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../shared/services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [MovieListComponent],
  providers: [MovieService] //se puede utilizar desde cualquier parte del sistema
})
export class MovieModule { }
