import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent }  from './movie-list/movie-list.component' //1rohelloeord
import { TestBindingComponent }  from './test-binding/test-binding.component' //2rohelloeord



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
  },

{
    path: 'test-binding',
   // children: []
   component: TestBindingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
