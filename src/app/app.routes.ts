import { Routes } from '@angular/router';
import { MoviesCatalogComponent } from './movies-catalog/movies-catalog.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
    path: 'movies',
    component: MoviesCatalogComponent
}
];
