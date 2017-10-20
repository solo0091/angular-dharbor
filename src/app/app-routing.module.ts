import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TestBindingComponent } from './test-binding/test-binding.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';


const routes: Routes = [
  {
    path : '', // root of the application
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    children: []
  },
  {
    path : 'home',
    component: MovieListComponent
  },
  {
    path : 'test-binding/:id',
    component: TestBindingComponent
  },
  {
    path : 'movie-detail/:id',
    component: MovieDetailComponent
  },
  {
    path : 'movie/:id/edit',
    component: MovieEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
