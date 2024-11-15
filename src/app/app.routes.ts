import { Routes } from '@angular/router';

import { HomeComponent } from './modules/home/container/home.component';
import { PostsComponent } from './modules/posts/container/posts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
];
