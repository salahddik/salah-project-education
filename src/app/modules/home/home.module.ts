import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home.component';
import { homeRoutingModule } from './home.routing';
import { FormComponent } from './components/form/form.component';
import { ResultformComponent } from './components/resultform/resultform.component';

@NgModule({
  declarations: [HomeComponent, FormComponent, ResultformComponent],
  imports: [CommonModule, homeRoutingModule], // Import CommonModule for common Angular directives
  exports: [HomeComponent], // Export HomeComponent so it can be used in other modules
})
export class HomeModule {}
