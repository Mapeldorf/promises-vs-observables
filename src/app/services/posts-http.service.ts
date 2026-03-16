import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSON_PLACEHOLDER_URL } from '../app.config';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsHttpService {
  private readonly url = inject(JSON_PLACEHOLDER_URL);

  private readonly http = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }
}
