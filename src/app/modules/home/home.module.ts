import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel
import { HomeComponent } from './container/home.component';
import { homeRoutingModule } from './home.routing';
import { FormComponent } from './components/form/form.component';
import { ResultFormComponent } from './components/resultform/resultform.component';
import { provideHttpClient } from '@angular/common/http';
import { StarPipe } from '../../shared/pipes/star.pipe';
import { MonnyPipe } from '../../shared/pipes/monny.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [HomeComponent, FormComponent, ResultFormComponent],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    homeRoutingModule,
    MonnyPipe,
    StarPipe,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [HomeComponent], // Export HomeComponent so it can be used in other modules
  providers: [
    provideHttpClient(), // Providing the HttpClient using hadi badaltha dir deprecated()
  ],
})
export class HomeModule {}
