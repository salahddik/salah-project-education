import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'; // Import environment variables for flexibility between environments.
import { productInterface } from '../../../shared/interface/productInterface'; // Importing the interface to define the structure of posts.
import { HttpClient } from '@angular/common/http'; // HttpClient is used to make HTTP requests.

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: productInterface[] = []; // Holds the list of products
  loading = false; // Indicates loading state
  error = ''; // Stores error message if any
  private apiUrl = environment.apiproducts; // Use API URL from environment file

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts(); // Fetch products on component initialization
  }
  fetchProducts(): void {
    this.loading = true; // Start loading
    this.http.get<productInterface[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.products = data; // Store fetched products
        this.loading = false; // End loading
      },
      error: () => {
        this.error = 'Failed to load products. Please try again later.'; // Handle error
        this.loading = false;
      },
    });
  }
}
