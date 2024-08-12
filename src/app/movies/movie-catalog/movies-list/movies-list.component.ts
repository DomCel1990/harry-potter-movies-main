import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BudgetPipe } from '../../shared/pipes/budget.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { MovieList } from '../../shared/models/movie-list.model';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, BudgetPipe, DurationPipe],
  providers: [CurrencyPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnChanges{
  @Input() movies: MovieList[];

  private router = inject(Router);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movies']) {
      this.movies = changes['movies'].currentValue;
    }
  }
  
  onDetails(id: string){
    this.router.navigate(['movies', id]);
  }
}
