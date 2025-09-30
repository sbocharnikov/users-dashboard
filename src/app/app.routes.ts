import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./users/users').then((c) => c.Users),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
