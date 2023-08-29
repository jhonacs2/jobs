import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'public',
    loadChildren: () => import('../public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'public'
  }
];
