import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostsHttpService } from '../../services/posts-http.service';
import { UsersHttpService } from '../../services/users-http.service';

@Component({
  selector: 'app-http-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './http-filter.component.html',
})
export class HttpFilterComponent {
  userId = '';
  filteredPosts: Post[] = [];
  foundUser: User | undefined;
  loading = false;
  searched = false;
  error: string | null = null;

  private readonly postsService = inject(PostsHttpService);
  private readonly usersService = inject(UsersHttpService);

  search() {
    const id = parseInt(this.userId, 10);
    if (!id) return;

    this.loading = true;
    this.searched = false;
    this.error = null;

    forkJoin([
      this.postsService.getPosts(),
      this.usersService.getUsers(),
    ]).subscribe({
      next: ([posts, users]) => {
        this.filteredPosts = posts.filter((p) => p.userId === id);
        this.foundUser = users.find((u) => u.id === id);
        this.searched = true;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error loading data';
        this.loading = false;
      },
    });
  }
}
