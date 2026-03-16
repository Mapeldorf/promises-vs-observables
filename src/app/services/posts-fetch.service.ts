import { inject, Injectable } from '@angular/core';
import { JSON_PLACEHOLDER_URL } from '../app.config';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsFetchService {
  private url = inject(JSON_PLACEHOLDER_URL);

  async getPosts(): Promise<Post[]> {
    return fetch(`${this.url}/posts`).then((r) => r.json());
  }
}
