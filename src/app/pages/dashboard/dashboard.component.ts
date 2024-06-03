import { Component } from '@angular/core';
import { MovieSearchComponent } from "../../components/movie-search/movie-search.component";
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MovieSearchComponent,
    MatCard,
    MatCardContent
  ],
  providers:  [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
