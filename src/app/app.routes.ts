import { Routes } from '@angular/router';
import { MoviesCatalogComponent } from './movies-catalog/movies-catalog.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsResolver } from './shared/services/movie-details.resolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
    path: 'movies',
    component: MoviesCatalogComponent,
    },
    {
        path: 'movies/:movieId',
        component: MovieDetailsComponent,
        resolve: {
            movie: MovieDetailsResolver,
        }
    }
];
