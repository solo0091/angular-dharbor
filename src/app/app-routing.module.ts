import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { TestBindingComponent } from "./test-binding/test-binding.component";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";

const routes: Routes = [
  {path: '',    redirectTo:'home',    pathMatch:'full'  },
  {path:'home', component:MovieListComponent},
  {path:'movie/:id', component:MovieDetailComponent} ,
  {path:'movie/:id/edit', component:MovieEditComponent} ,
  {path:'test-binding', component:TestBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
