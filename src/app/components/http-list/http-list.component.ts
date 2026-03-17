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

  error: string | null = null;

  private readonly postsService = inject(PostsHttpService);

  private readonly usersService = inject(UsersHttpService);

  ngOnInit() {
    this.getPosts();
    this.getUsers();
  }

  private getPosts(): void {
    this.postsService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: () => {
        this.error = 'Error loading posts data';
      },
    });
  }

  private getUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: () => {
        this.error = 'Error loading users data';
      },
    });
  }
}
