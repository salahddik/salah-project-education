import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    title: 'Home',
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.postsModule),
    title: 'posts',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/Products.module').then(
        (m) => m.ProductsModule,
      ),
    title: 'products',
  },
];
