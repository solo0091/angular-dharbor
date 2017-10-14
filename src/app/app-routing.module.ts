import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from 'app/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',//root path
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    //redireccionamos q la lista sea la pagina home
    path: 'home',
    component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
