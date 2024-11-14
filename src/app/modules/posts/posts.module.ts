import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './container/posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule], // Import CommonModule for common Angular directives
  exports: [PostsComponent], // Export NavbarComponent so it can be used in other modules
})
export class postsModule { }
