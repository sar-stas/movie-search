import { Routes } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MovieInfoComponent } from "./pages/movie-info/movie-info.component";
import { MovieDetailResolver } from "./pages/movie-info/movie-info.resolver";

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'movie-detail/:id',
    loadComponent: () => import('./pages/movie-info/movie-info.component').then(m=>m.MovieInfoComponent),
    resolve: { movie: MovieDetailResolver }
  },
  { path: '**', redirectTo: '' }
];
