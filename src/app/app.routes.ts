import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        loadChildren: () => import('./movies/movie.routes')
            .then(routes => routes.MOVIE_ROUTES)
    }
];
