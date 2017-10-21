import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from 'app/movie-list/movie-list.component';
import { TestBindingComponent} from './test-binding/test-binding.component';
import { MovieDatailComponent } from './movie-datail/movie-datail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

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
  },
  {
    path:'test-binding',
    component: TestBindingComponent
  },
  {
    path:'movie/:id',
    component: MovieDatailComponent
  },
  {
    path:'movie/:id/edit',
    component: MovieEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

