import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent }  from './movie-list/movie-list.component' //1rohelloeord



const routes: Routes = [

  {
    path: '', //root of the apllication
    redirectTo: 'home',
    pathMatch: 'full' //verifica error
  },
  {
    path: 'home',
   // children: []
   component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
