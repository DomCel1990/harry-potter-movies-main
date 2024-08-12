import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../shared/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BudgetPipe } from '../shared/pipes/budget.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-catalog',
  standalone: true,
  imports: [HttpClientModule, CommonModule, BudgetPipe, DurationPipe, ReactiveFormsModule],
  providers: [MoviesService, CurrencyPipe],
  templateUrl: './movies-catalog.component.html',
  styleUrl: './movies-catalog.component.css'
})
export class MoviesCatalogComponent implements OnInit{
  movies$!: Observable<Movie[]>;
  formFilter!: FormGroup;

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
  
  onDetails(id: string){
    console.log(id);
    
  }

}
