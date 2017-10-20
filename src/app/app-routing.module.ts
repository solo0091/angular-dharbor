import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailComponent } from "./movie/movie-detail/movie-detail.component";
import { MovieEditComponent } from "./movie/movie-edit/movie-edit.component";
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
    path:'home/:page',
    component:MovieListComponent
  },
  {
    path:'movie/:id',
    component:MovieDetailComponent
  },
  {
    path:"",
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:"binding",
    component:BindingComponent
  },
  {
    path:'movie/:id/edit',
    component:MovieEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
