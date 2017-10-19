import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component'
import {TestBindingComponent} from './test-binding/test-binding.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component'
const routes: Routes = [
  {path:'',
   redirectTo:'home',
   pathMatch:'full'
  },
  {
    path: 'home',
    component: MovieListComponent
  },
  {
    path:'test',
    component: TestBindingComponent
  },
  {
    path:'movie/:id',
    component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
