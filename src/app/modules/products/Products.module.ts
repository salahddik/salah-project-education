import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './container/products.component';
import { ProductsRoutingModule } from './Products.routing';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule], // Import CommonModule for common Angular directives
  exports: [ProductsComponent], // Export NavbarComponent so it can be used in other modules
  providers: [
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class ProductsModule {}
