import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './container/posts.component';
import { postsRoutingModule } from './posts.routing';
import { provideHttpClient } from '@angular/common/http';
import { ServiceApiService } from '../../shared/service/service-api.service'; // Import the service

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, postsRoutingModule], // Import CommonModule for common Angular directives
  exports: [PostsComponent], // Export PostsComponent so it can be used in other modules
  providers: [
    ServiceApiService,
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class postsModule {}
