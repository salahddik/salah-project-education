import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule], // Import CommonModule for common Angular directives
  exports: [HomeComponent], // Export NavbarComponent so it can be used in other modules
})
export class HomeModule { }
