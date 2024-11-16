import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../../shared/service/service-api.service'; // Import the service
import { Postsinterface } from '../../../shared/interface/postsinterface'; // Import the service

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  posts: Postsinterface[] = []; // Typed posts array
  constructor(private service: ServiceApiService) {}
  ngOnInit(): void {
    // Fetch posts when the component initializes
    this.service.getPosts().subscribe((data) => {
      this.posts = data; // Store the fetched posts in the component
    });
  }
}
