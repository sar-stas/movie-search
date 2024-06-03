import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from "../../services/movie.service";
import { map } from "rxjs/operators";
import { MovieInfo } from "../../common/interfaces/movie-info";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<any> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieInfo> {
    const imdbID = route.paramMap.get('id');
    return this.movieService.getMovieDetails(imdbID!).pipe();
  }
}
