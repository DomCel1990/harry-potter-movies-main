import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MovieDetailsResolver } from './shared/services/movie-details.resolver';
import { MoviesService } from './shared/services/movie.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), MovieDetailsResolver, MoviesService, provideHttpClient()]
};
