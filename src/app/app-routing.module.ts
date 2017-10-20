import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { MovieEditComponent } from './movie-edit/movie-edit.component'
import { MovieListComponent} from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestBindingComponent } from './test-binding/test-binding.component'

const routes: Routes = [
  {
    path: '', //root of the application
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MovieListComponent
  },
  {
    path: 'test-binding',
    component: TestBindingComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: 'movie/:id/edit',
    component: MovieEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
