import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamModule } from './modules/exam/Exam.module';

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
  {
    path: 'form',
    loadChildren: () =>
      import('./modules/form/form.module').then((m) => m.FormModule),
    title: 'form',
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./modules/result/result.module').then((m) => m.ResultModule),
    title: 'result',
  },
  {
    path: 'exam',
    loadChildren: () =>
      import('./modules/exam/Exam.module').then((m) => m.ExamModule),
    title: 'exam',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Set up the router with the routes
  exports: [RouterModule], // Export RouterModule to use in AppModule
})
export class AppRoutingModule {}
