import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MovieService } from '../share/services/movie.service';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { DialogPreviewComponent } from '../dialog-preview/dialog-preview.component';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  declarations: [MovieListComponent, DialogPreviewComponent, MovieListItemComponent, MovieDetailComponent, MovieEditComponent],
  entryComponents: [DialogPreviewComponent],
  providers: [MovieService]
})
export class MovieModule { }
