import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeAComponent } from './home-a/home-a.component';
import { HomeBComponent } from './home-b/home-b.component';

export default <Routes>[
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home-a', component: HomeAComponent },
      { path: 'home-b', component: HomeBComponent },
    ],
  },
];
