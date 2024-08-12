import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../shared/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BudgetPipe } from '../shared/pipes/budget.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';

@Component({
  selector: 'app-movies-catalog',
  standalone: true,
  imports: [HttpClientModule, CommonModule, BudgetPipe, DurationPipe],
  providers: [MoviesService, CurrencyPipe],
  templateUrl: './movies-catalog.component.html',
  styleUrl: './movies-catalog.component.css'
})
export class MoviesCatalogComponent implements OnInit{

  movies$!: Observable<Movie[]>;

  private moviesService = inject(MoviesService);

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();
  }

  onDetails(id: string){
    console.log(id);
    
  }

}
