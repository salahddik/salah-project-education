import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel
import { HomeComponent } from './container/home.component';
import { homeRoutingModule } from './home.routing';
import { FormComponent } from './components/form/form.component';
import { ResultFormComponent } from './components/resultform/resultform.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, FormComponent, ResultFormComponent],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    homeRoutingModule,
  ],
  exports: [HomeComponent], // Export HomeComponent so it can be used in other modules
  providers: [
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class HomeModule {}
