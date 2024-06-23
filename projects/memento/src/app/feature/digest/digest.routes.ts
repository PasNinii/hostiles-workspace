import { Route } from '@angular/router';
import { DigestComponent } from './digest.components';

export type ExtendedRoute = Route & { icon?: string };

export default <ExtendedRoute[]>[
  {
    path: '',
    component: DigestComponent,
    children: <ExtendedRoute>[
      {
        path: 'digest-list',
        title: 'List',
        icon: 'table_rows',
        loadChildren: () => import('./digest-list/digest-list.routes'),
      },
      {
        path: 'digest-create',
        title: 'Add',
        icon: 'add',
        loadChildren: () => import('./digest-create/digest-create.routes'),
      },
      {
        path: 'digest-stat',
        title: 'Stat',
        icon: 'stacked_bar_chart',
        loadChildren: () => import('./digest-stat/digest-stat.routes'),
      },
      {
        path: 'digest-detail',
        title: 'Dig',
        icon: 'summarize',
        loadChildren: () => import('./digest-detail/digest-detail.routes'),
      },
    ],
  },
];
