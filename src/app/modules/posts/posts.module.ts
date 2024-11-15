import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './container/posts.component';
import { postsRoutingModule } from './posts.routing';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, postsRoutingModule], // Import CommonModule for common Angular directives
  exports: [PostsComponent], // Export NavbarComponent so it can be used in other modules
})
export class postsModule {}
