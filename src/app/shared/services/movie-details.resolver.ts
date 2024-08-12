import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Movie } from "../models/movie.model";
import { MoviesService } from "./movie.service";


@Injectable()
export class MovieDetailsResolver implements Resolve<Movie> {
  private moviesService = inject(MoviesService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
    const movieId = route.paramMap.get('movieId');

    return this.moviesService.getMovieById(movieId);
  }
}