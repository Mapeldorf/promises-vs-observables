import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const JSON_PLACEHOLDER_URL = new InjectionToken<string>(
  '[JSON_PLACEHOLDER_URL]',
  {
    providedIn: 'root',
    factory() {
      return 'https://jsonplaceholder.typicode.com';
    },
  },
);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
