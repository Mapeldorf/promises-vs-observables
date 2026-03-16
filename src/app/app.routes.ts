import { Routes } from '@angular/router';
import { FetchListComponent } from './components/fetch-list/fetch-list.component';
import { HttpListComponent } from './components/http-list/http-list.component';
import { FetchFilterComponent } from './components/fetch-filter/fetch-filter.component';
import { HttpFilterComponent } from './components/http-filter/http-filter.component';

export const routes: Routes = [
  { path: 'fetch-list',   component: FetchListComponent },
  { path: 'http-list',    component: HttpListComponent },
  { path: 'fetch-filter', component: FetchFilterComponent },
  { path: 'http-filter',  component: HttpFilterComponent },
  { path: '',             redirectTo: 'fetch-list', pathMatch: 'full' },
];
