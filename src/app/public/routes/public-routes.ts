import {Routes} from '@angular/router';
import {HomeComponent} from '../views/home/home.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../modules/job/job.module').then(m => m.JobModule)
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];
