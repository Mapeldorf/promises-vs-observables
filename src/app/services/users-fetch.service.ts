import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { JSON_PLACEHOLDER_URL } from './json-placeholder-url.token';

@Injectable({
  providedIn: 'root',
})
export class UsersFetchService {
  private readonly url = inject(JSON_PLACEHOLDER_URL);

  async getUsers(): Promise<User[]> {
    return fetch(`${this.url}/users`).then((r) => r.json());
  }
}
