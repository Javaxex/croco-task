import { Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: CoreComponent,
    loadChildren: () => import('./core/core.routes').then(m => m.coreRoutes)
  },
  { path: '**', redirectTo: '/slots' },
];
