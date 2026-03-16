import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSON_PLACEHOLDER_URL } from '../app.config';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  private readonly url = inject(JSON_PLACEHOLDER_URL);

  private readonly http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }
}
