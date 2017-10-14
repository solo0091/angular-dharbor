
import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent   } from './movie-list/movie-list.component';
import { TestBindingComponent } from './test-binding/test-binding.component';

const routes: Routes = [
  {
    path      : '',  //raiz de la aplicacion
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path     : 'home',
    component: MovieListComponent
  },
  {
    path     : 'test-binding',
    component: TestBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
