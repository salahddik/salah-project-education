import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../../shared/service/service-api.service'; // Import the service
import { Postsinterface } from '../../../shared/interface/postsinterface'; // Import the interface

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'], // Corrected property name to `styleUrls`
})
export class PostsComponent implements OnInit {
  loading: boolean = true; // Set loading state to true before fetching data
  posts: Postsinterface[] = []; // Typed posts array
  error: string = ''; // Stores error message if any
  score: number = 10;
  // this boolean is for test
  alive: boolean = true;
  die: boolean = false;
  //--------------------
  // this number is for test
  numberONE: number = 15;
  numberTOW: number = 10;
  results: number = 0;
  //--------------------
  // this array is for test
  arraytst: string[] = ['Banana', 'Mango'];

  //--------------------
  constructor(private service: ServiceApiService) {} // Dependency Injection

  ngOnInit(): void {
    // this test boolean
    if (this.alive || this.die) {
      console.log('this mean or is is true.'); // This will be printed
    } else {
      console.log('this mean or is is fals.');
    }
    if (this.alive && this.die) {
      console.log('this mean and  is is true.'); // This will be printed
    } else {
      console.log('this mean and is is fals.');
    }
    // this test number operations
    this.results = this.numberONE + this.numberTOW;
    console.log(this.results); // the answer is 25

    this.results = this.numberONE * this.numberTOW;
    console.log(this.results); // the answer is 150

    this.results = Math.random();
    console.log(this.results); // hadi  gadi traja3 3adad fasila

    this.results = Math.floor(Math.random() * 100);
    console.log(this.results); // hadi  gadi traja3 3adad 7a9i9i

    // this array is for test
    console.log(this.arraytst);

    this.arraytst.push('Kiwi');
    console.log(this.arraytst); //  hna gadi tzad kiwi l array

    this.arraytst.pop();
    console.log(this.arraytst); //  hna gadi imsa7 kiwi l array

    setTimeout(() => {
      this.fetchPosts();
    }, 5000); // 5 seconds delay
  }

  fetchPosts(): void {
    this.service.getPosts().subscribe({
      // Handle next (data emission)
      next: (data) => {
        this.posts = data; // Store the fetched posts
      },
      // Handle error
      error: (err) => {
        this.error = 'Failed to load posts. Please try again later.'; // Set error message
        console.error('Error fetching posts:', err);
      },
      // Handle complete
      complete: () => {
        this.loading = false; // Reset loading state when observable completes
      },
    });
  }
}
