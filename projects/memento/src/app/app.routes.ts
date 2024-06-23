import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./feature/home/home.routes') },
  {
    path: '',
    loadChildren: () => import('./feature/digest/digest.routes'),
  },
  { path: '**', redirectTo: '' },
];
