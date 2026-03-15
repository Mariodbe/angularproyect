import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'BarRío | Tapas y Ambiente en Arganzuela'
  },
  {
    path: 'carta',
    loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent),
    title: 'La Carta | BarRío'
  },
  {
    path: 'resenas',
    loadComponent: () => import('./pages/reviews/reviews.component').then(m => m.ReviewsComponent),
    title: 'Reseñas | BarRío'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | BarRío'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
