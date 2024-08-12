import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetPipe } from '../shared/pipes/budget.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { MoviesService } from '../shared/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { ArrayPipe } from '../shared/pipes/array.pipe';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule, BudgetPipe, DurationPipe, ReactiveFormsModule, ArrayPipe, MatIconModule],
  providers: [MoviesService, CurrencyPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie$!: Observable<Movie>;

  private router = inject(ActivatedRoute);
  private rout = inject(Router);

  ngOnInit(): void {
    this.movie$ = this.router.data.pipe(map(data => data['movie']));
  }

  onBack() {
    this.rout.navigate(['movies']);
  }
}
