import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  {
    path: 'slots',
    loadComponent: () => import('../pages/slots/slots.component').then(m => m.SlotsComponent),
  },
];
