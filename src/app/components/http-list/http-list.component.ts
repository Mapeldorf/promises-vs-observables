import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostsHttpService } from '../../services/posts-http.service';
import { UsersHttpService } from '../../services/users-http.service';

@Component({
  selector: 'app-http-list',
  standalone: true,
  templateUrl: './http-list.component.html',
})
export class HttpListComponent implements OnInit {
  posts: Post[] = [];

  users: User[] = [];

  loading = true;

  error: string | null = null;

  private readonly postsService = inject(PostsHttpService);

  private readonly usersService = inject(UsersHttpService);

  private received = 0;

  ngOnInit() {
    this.postsService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.onReceived();
      },
      error: () => {
        this.error = 'Error loading data';
        this.loading = false;
      },
    });

    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.onReceived();
      },
      error: () => {
        this.error = 'Error loading data';
        this.loading = false;
      },
    });
  }

  private onReceived() {
    if (++this.received === 2) this.loading = false;
  }
}
