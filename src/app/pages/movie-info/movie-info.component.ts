import { Component, inject, Input, OnInit } from '@angular/core';
import { JsonPipe } from "@angular/common";
import { MovieInfo } from "../../common/interfaces/movie-info";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { tap } from "rxjs";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [
    JsonPipe,
    MatToolbar,
    MatIcon,
    RouterLink
  ],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent implements OnInit {
  // movie?: MovieInfo;
  movie?: any;

  private route: ActivatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.route.data.pipe(tap(console.log)).subscribe(data => {
      this.movie = data.movie;
    })
  }
}
