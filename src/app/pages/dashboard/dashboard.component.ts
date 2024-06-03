import { Component } from '@angular/core';
import { MovieSearchComponent } from "../../components/movie-search/movie-search.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MovieSearchComponent
  ],
  providers:  [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
