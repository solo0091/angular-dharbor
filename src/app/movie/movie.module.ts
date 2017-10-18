import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MaterialModule } from '../material/material.module';
import { MovieService } from '../shared/services/movie.service';
import {HttpClientModule} from '@angular/common/http';

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
