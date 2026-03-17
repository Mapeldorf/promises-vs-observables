import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { JSON_PLACEHOLDER_URL } from './json-placeholder-url.token';

@Injectable({
  providedIn: 'root',
})
export class PostsFetchService {
  private url = inject(JSON_PLACEHOLDER_URL);

  async getPosts(): Promise<Post[]> {
    return fetch(`${this.url}/posts`).then((r) => r.json());
  }
}
