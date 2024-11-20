import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../../shared/service/service-api.service'; // Import the service
import { Postsinterface } from '../../../shared/interface/postsinterface'; // Import the interface

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'], // Corrected property name to `styleUrls`
})
export class PostsComponent implements OnInit {
  posts: Postsinterface[] = []; // Typed posts array
  loading = true; // Set loading state to true before fetching data
  error = ''; // Stores error message if any

  constructor(private service: ServiceApiService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      // Handle next (data emission)
      next: (data) => {
        this.posts = data; // Store the fetched posts
        console.log('Posts fetched successfully');
      },
      // Handle error
      error: (err) => {
        this.error = 'Failed to load posts. Please try again later.'; // Set error message
        console.error('Error fetching posts:', err);
      },
      // Handle complete
      complete: () => {
        this.loading = false; // Reset loading state when observable completes
        console.log('Fetching posts completed.');
      },
    });
  }
}
