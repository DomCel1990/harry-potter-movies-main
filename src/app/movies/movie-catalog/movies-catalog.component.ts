import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { Movie } from '../shared/models/movie.model';
import { MoviesService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movies-catalog',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, MoviesListComponent],
  providers: [MoviesService],
  templateUrl: './movies-catalog.component.html',
  styleUrl: './movies-catalog.component.css'
})
export class MoviesCatalogComponent implements OnInit{
  movies$: Observable<Movie[]>;
  formFilter: FormGroup;

  private moviesService = inject(MoviesService);
  private formBuilder = inject(FormBuilder);


  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();

    this.setForm();
  }

  setForm() {
    this.formFilter = this.formBuilder.group({
      title: [''],
      release_year: ['']
    });

    this.formFilter.valueChanges.subscribe(form => {
      this.movies$ = this.moviesService.getMovies(form.title, form.release_year);
    });
  }

}
