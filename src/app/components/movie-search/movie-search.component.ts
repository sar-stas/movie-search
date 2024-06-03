import { Component, inject } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MovieService } from "../../services/movie.service";
import { debounceTime, distinctUntilChanged, filter, switchMap } from "rxjs";
import { MatOption } from "@angular/material/core";
import { MatAutocomplete, MatAutocompleteTrigger } from "@angular/material/autocomplete";
import { MatInput } from "@angular/material/input";
import { NgForOf, NgIf } from "@angular/common";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { MovieShort } from "../../common/interfaces/movie-short";
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [
    MatFormField,
    MatOption,
    MatAutocomplete,
    MatInput,
    NgForOf,
    MatAutocompleteTrigger,
    MovieCardComponent,
    NgIf,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  private router = inject(Router);
  public movies: MovieShort[] = [];
  // public selectedMovie: any;
  public searchControl = new FormControl();

  constructor(private movieService: MovieService) {
    this.searchControl.valueChanges.pipe(
      filter((query: string) => query.length >= 4),
      debounceTime(700),
      distinctUntilChanged(),
      switchMap(query => this.movieService.searchMovies(query))
    ).subscribe(movies => this.movies = movies);
  }

  onSearch(event: any): void {
    const query = event.target.value;
    if (query.length >= 4) {
      this.movieService.searchMovies(query).subscribe(movies => this.movies = movies);
    }
  }

  onSelect(imdbID: string): void {
    this.router.navigate(['/movie-detail/' + imdbID]);
  }
    // this.movieService.getMovieDetails(imdbID).subscribe(movie => this.selectedMovie = movie);
}
