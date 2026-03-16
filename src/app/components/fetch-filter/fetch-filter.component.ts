import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostsFetchService } from '../../services/posts-fetch.service';
import { UsersFetchService } from '../../services/users-fetch.service';

@Component({
  selector: 'app-fetch-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fetch-filter.component.html',
})
export class FetchFilterComponent {
  userId = '';
  filteredPosts: Post[] = [];
  foundUser: User | undefined;
  loading = false;
  searched = false;
  error: string | null = null;

  private readonly postsService = inject(PostsFetchService);
  private readonly usersService = inject(UsersFetchService);

  async search() {
    const id = parseInt(this.userId, 10);
    if (!id) return;

    this.loading = true;
    this.searched = false;
    this.error = null;

    try {
      const [posts, users] = await Promise.all([
        this.postsService.getPosts(),
        this.usersService.getUsers(),
      ]);
      this.filteredPosts = posts.filter((p) => p.userId === id);
      this.foundUser = users.find((u) => u.id === id);
      this.searched = true;
    } catch (err) {
      this.error = 'Error loading data';
    } finally {
      this.loading = false;
    }
  }
}
