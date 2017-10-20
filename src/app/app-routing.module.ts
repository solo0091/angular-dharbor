import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from 'app/movie-list/movie-list.component';
import {TestBindingComponent} from './test-binding/test-binding.component'
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";

const routes: Routes = [
  { 
    ////redirecciona el path inicial al home
    path:'', //raiz de la app
    redirectTo:'home',
    pathMatch:'full'
  },
  {
   ///AL INGRESAR AL PATH /HOME, se va al .HTML del componente MOVIE LIST
    path: 'home', component: MovieListComponent    
  },
  ///CREAMOS UN PATH PARA test-binding
  {
    path: 'test-binding',component: TestBindingComponent
  },
///PARA VER LOS DETALLES DE LA PELICULA
  {
    path: 'movie/:id',component:MovieDetailComponent
  },
  {
    path: 'movie/:id/edit',component:MovieEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }