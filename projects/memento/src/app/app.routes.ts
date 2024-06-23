import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./feature/home/home.routes'),
  },
  {
    path: 'digest',
    title: 'Digest',
    loadChildren: () => import('./feature/digest/digest.routes'),
  },
  { path: '**', redirectTo: '' },
];
