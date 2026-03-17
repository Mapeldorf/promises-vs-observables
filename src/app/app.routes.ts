import { Routes } from '@angular/router';
import { FetchListComponent } from './components/fetch-list/fetch-list.component';
import { HttpListComponent } from './components/http-list/http-list.component';

export const routes: Routes = [
  { path: 'fetch-list', component: FetchListComponent },
  { path: 'http-list', component: HttpListComponent },
  { path: '', redirectTo: 'fetch-list', pathMatch: 'full' },
];
