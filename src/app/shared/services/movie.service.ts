import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map } from "rxjs";

import { Movie } from "../models/movie.model";

@Injectable()
export class MoviesService {
    private http = inject(HttpClient);

    getMovies(title = '', year = '') {
        return this.http.get<Movie[]>('/movies')
            .pipe(
                map(movies => 
                    movies.filter(movie => 
                      movie.title.toLowerCase().includes(title.toLowerCase()) && (year ? movie.release_date.startsWith(year) : true))
                    ));
    }
}