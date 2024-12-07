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
  loading: boolean = true; // Set loading state to true before fetching data
  error: string = ''; // Stores error message if any
  score: number = 10;

  constructor(private service: ServiceApiService) {} // Dependency Injection

  ngOnInit(): void {
    this.score = this.score * 100;
    console.log(this.score);
    setTimeout(() => {
      this.fetchPosts();
    }, 5000); // 5 seconds delay
  }

  fetchPosts(): void {
    this.service.getPosts().subscribe({
      // Handle next (data emission)
      next: (data) => {
        this.posts = data; // Store the fetched posts
        console.log('Posts fetched successfully');
        console.log(this.posts);
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
