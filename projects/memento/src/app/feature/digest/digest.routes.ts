import { Routes } from '@angular/router';
import { DigestComponent } from './digest.components';

export default <Routes>[
  {
    path: 'digest',
    component: DigestComponent,
    children: [
      {
        path: 'digest-list',
        loadChildren: () => import('./digest-list/digest-list.routes'),
      },
      {
        path: 'digest-create',
        loadChildren: () => import('./digest-create/digest-create.routes'),
      },
      {
        path: 'digest-stat',
        loadChildren: () => import('./digest-stat/digest-stat.routes'),
      },
      {
        path: 'digest-detail',
        loadChildren: () => import('./digest-detail/digest-detail.routes'),
      },
    ],
  },
];
