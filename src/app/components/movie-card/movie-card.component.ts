import { Component, Input } from '@angular/core';
import { JsonPipe } from "@angular/common";
import { MovieShort } from "../../common/interfaces/movie-short";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie?: any;
}
