import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule  } from '@angular/forms';
import { MovieService } from '../share/services/movie.service';
import { DialogPreviewComponent } from '../dialog-preview/dialog-preview.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [MovieListComponent, DialogPreviewComponent],
  entryComponents: [DialogPreviewComponent],
  providers: [MovieService]
})
export class MovieModule { }
