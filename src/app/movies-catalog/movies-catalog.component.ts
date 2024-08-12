import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../shared/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-catalog',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [MoviesService],
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
