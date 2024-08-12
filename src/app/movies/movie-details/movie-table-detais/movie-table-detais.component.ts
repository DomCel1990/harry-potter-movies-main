import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { BudgetPipe } from '../../shared/pipes/budget.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { ArrayPipe } from '../../shared/pipes/array.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-movie-table-detais',
  standalone: true,
  imports: [BudgetPipe, DurationPipe, ArrayPipe],
  providers: [CurrencyPipe],
  templateUrl: './movie-table-detais.component.html',
  styleUrl: './movie-table-detais.component.css'
})
export class MovieTableDetaisComponent {
  @Input() movie: Movie;
}
