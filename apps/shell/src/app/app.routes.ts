import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('shop/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
