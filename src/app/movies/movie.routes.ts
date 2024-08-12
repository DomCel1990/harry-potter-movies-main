import { Routes } from "@angular/router";

import { MovieDetailsResolver } from "./shared/services/movie-details.resolver";
import { MoviesCatalogComponent } from "./movie-catalog/movies-catalog.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

export const MOVIE_ROUTES: Routes = [
    {
        path: '',
        component: MoviesCatalogComponent,
    },
    {
        path: ':movieId',
        component: MovieDetailsComponent,
        resolve: {
            movie: MovieDetailsResolver,
        }
    }
]