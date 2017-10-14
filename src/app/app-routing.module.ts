import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from 'app/movie-list/movie-list.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }