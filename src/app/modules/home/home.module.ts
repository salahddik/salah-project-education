import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home.component';
import { homeRoutingModule } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, homeRoutingModule], // Import CommonModule for common Angular directives
  exports: [HomeComponent], // Export HomeComponent so it can be used in other modules
})
export class HomeModule {}
