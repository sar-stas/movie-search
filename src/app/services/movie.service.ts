import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieShort } from "../common/interfaces/movie-short";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '7a3b7a67';
  private baseUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<MovieShort[]> {
    return this.http.get(`${this.baseUrl}?s=${query}&apikey=${this.apiKey}`).pipe(
      map((response: any) => response.Search)
    );
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?i=${imdbID}&apikey=${this.apiKey}`);
  }
}
