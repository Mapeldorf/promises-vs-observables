import { inject, Injectable } from '@angular/core';
import { JSON_PLACEHOLDER_URL } from '../app.config';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersFetchService {
  private readonly url = inject(JSON_PLACEHOLDER_URL);

  async getUsers(): Promise<User[]> {
    return fetch(`${this.url}/users`).then((r) => r.json());
  }
}
