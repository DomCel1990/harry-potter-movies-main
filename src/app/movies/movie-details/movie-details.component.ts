import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';

import { MoviesService } from '../shared/services/movie.service';
import { Movie } from '../shared/models/movie.model';;
import { MovieTableDetaisComponent } from './movie-table-detais/movie-table-detais.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatIconModule, MovieTableDetaisComponent],
  providers: [MoviesService],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie$: Observable<Movie>;

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.movie$ = this.route.data.pipe(map(data => data['movie']));
  }

  onBack() {
    this.router.navigate(['movies']);
  }
}
