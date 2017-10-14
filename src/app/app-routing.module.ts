import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { BindingComponent } from "./binding/binding.component";
const routes: Routes = [
 /* {
    path: '',
    children: []
  }*/
  {
    path:'home',
    component:MovieListComponent
  },
  {
    path:"",
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:"binding",
    component:BindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
