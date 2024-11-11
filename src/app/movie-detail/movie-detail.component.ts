import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  title: string = "Cloud Atlas";
  year: number = 2012;
  rating: string = "R";
}
