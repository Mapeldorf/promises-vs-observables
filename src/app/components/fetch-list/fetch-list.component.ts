import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostsFetchService } from '../../services/posts-fetch.service';
import { UsersFetchService } from '../../services/users-fetch.service';

@Component({
  selector: 'app-fetch-list',
  standalone: true,
  templateUrl: './fetch-list.component.html',
})
export class FetchListComponent implements OnInit {
  posts: Post[] = [];

  users: User[] = [];

  error: string | null = null;

  private readonly postsService = inject(PostsFetchService);

  private readonly usersService = inject(UsersFetchService);

  ngOnInit() {
    this.postsService
      .getPosts()
      .then((posts) => {
        this.posts = posts;
      })
      .catch(() => {
        this.error = 'Error loading posts data';
      });

    this.usersService
      .getUsers()
      .then((users) => {
        this.users = users;
      })
      .catch(() => {
        this.error = 'Error loading users data';
      });
  }
}
