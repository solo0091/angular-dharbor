import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TestBindingComponent } from './test-binding/test-binding.component';

const routes: Routes = [
  {
    path: '', // root of application
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
