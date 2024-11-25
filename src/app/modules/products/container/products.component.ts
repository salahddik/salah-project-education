import { Component, OnInit } from '@angular/core';
import { productInterface } from '../../../shared/interface/productInterface'; // Importing the interface
import { ServiceApiService } from '../../../shared/service/service-api.service'; // Importing the service

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], // Corrected to `styleUrls`
})
export class ProductsComponent implements OnInit {
  products: productInterface[] = []; // Holds the list of products
  loading = true; // Set loading state to true before fetching data
  error = ''; // Stores error message if any

  constructor(private service: ServiceApiService) {} // hadi hia li katsama di Dependency injection

  ngOnInit(): void {
    // Simulate loading for 5 seconds before starting to fetch posts
    setTimeout(() => {
      this.fetchProducts();
    }, 5000); // 5 seconds delay
  }
  fetchProducts(): void {
    this.service.getProducts().subscribe({
      // Handle emitted data (next)
      next: (data) => {
        this.products = data; // Store the fetched products
        console.log('Products fetched successfully');
      },
      // Handle errors
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.'; // User-friendly error message
        console.error('Error fetching products:', err);
      },
      // Handle completion
      complete: () => {
        this.loading = false; // Reset loading state when observable completes
        console.log('Fetching products completed.');
      },
    });
  }
}
