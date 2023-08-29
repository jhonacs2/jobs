import {Routes} from '@angular/router';
import {HomeComponent} from '../views/home/home.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];
