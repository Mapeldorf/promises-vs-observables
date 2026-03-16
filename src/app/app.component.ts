import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-gray-900 text-gray-100">
      <!-- Navbar -->
      <nav class="border-b border-gray-800">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
          <span class="text-sm font-semibold text-gray-400 tracking-widest uppercase">Promises <span class="text-indigo-400">vs</span> Observables</span>
          <div class="flex">
            <a routerLink="/fetch-list" routerLinkActive="text-white border-indigo-500"
              class="px-4 py-2 text-sm text-gray-500 hover:text-gray-200 border-b-2 border-transparent transition-colors">
              Fetch List
            </a>
            <a routerLink="/http-list" routerLinkActive="text-white border-indigo-500"
              class="px-4 py-2 text-sm text-gray-500 hover:text-gray-200 border-b-2 border-transparent transition-colors">
              HTTP List
            </a>
            <a routerLink="/fetch-filter" routerLinkActive="text-white border-indigo-500"
              class="px-4 py-2 text-sm text-gray-500 hover:text-gray-200 border-b-2 border-transparent transition-colors">
              Fetch Filter
            </a>
            <a routerLink="/http-filter" routerLinkActive="text-white border-indigo-500"
              class="px-4 py-2 text-sm text-gray-500 hover:text-gray-200 border-b-2 border-transparent transition-colors">
              HTTP Filter
            </a>
          </div>
        </div>
      </nav>

      <!-- Main content -->
      <main class="max-w-6xl mx-auto">
        <router-outlet />
      </main>
    </div>
  `,
})
export class AppComponent {}
