import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TestBindingComponent } from './test-binding/test-binding.component';
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {
    path: '', //root of the application
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MovieListComponent,
    children: [ // rutas hijas, se verán dentro del componente padre
      {
        path: 'movie', // la ruta real es movimientos/nuevo
        component: MovieDetailComponent
      }
    ]
  },
  {
    path: 'test-binding',
    component: TestBindingComponent
  }
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
