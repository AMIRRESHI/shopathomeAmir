import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './core';
import { AdminComponent } from './admin.component';
import { SignInComponent } from './sign-in.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'signin', component: SignInComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];