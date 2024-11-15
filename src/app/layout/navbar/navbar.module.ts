import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './container/navbar.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterLink], // Import CommonModule for common Angular directives
  exports: [NavbarComponent], // Export NavbarComponent so it can be used in other modules
})
export class NavbarModule {}
