import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './container/posts.component';
import { postsRoutingModule } from './posts.routing';
import { HttpClientModule } from '@angular/common/http';
import { ServiceApiService } from '../../shared/service/service-api.service'; // Import the service

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, postsRoutingModule, HttpClientModule], // Import CommonModule for common Angular directives
  exports: [PostsComponent], // Export PostsComponent so it can be used in other modules
  providers: [
    ServiceApiService  // Providing the service at the module level
  ]
})
export class postsModule {}
