import { InjectionToken } from '@angular/core';

export const JSON_PLACEHOLDER_URL = new InjectionToken<string>(
  '[JSON_PLACEHOLDER_URL]',
  {
    providedIn: 'root',
    factory() {
      return 'https://jsonplaceholder.typicode.com';
    },
  },
);
