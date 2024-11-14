import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './modules/home/container/home.component';
import { PostsComponent } from './modules/posts/container/posts.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'posts', component: PostsComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  @NgModule({
    imports: [RouterModule.forRoot(routes)],  // forRoot() is for the root routing module
    exports: [RouterModule]
  })
  export class AppRoutingModule {}  