import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from 'app/movie-list/movie-list.component';
import { TestBindingComponent} from './test-binding/test-binding.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

